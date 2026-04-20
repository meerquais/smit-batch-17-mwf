import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  serverTimestamp,
  startAfter,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { batchCreateNotification } from '../../notification/services/notificationService';

const DEFAULT_PAGE_SIZE = 10;

const hashtagRegex = /#(\w+)/g;
const mentionRegex = /@([a-zA-Z0-9._-]+)/g;

const parseHashtags = (text) => Array.from(text.matchAll(hashtagRegex)).map((item) => item[1].toLowerCase());
const parseMentions = (text) => Array.from(text.matchAll(mentionRegex)).map((item) => item[1]);

export async function createPost(data) {
  try {
    const clientNow = new Date();
    const payload = {
      userId: data.userId,
      displayName: data.displayName ?? '',
      photoURL: data.photoURL ?? null,
      isVerified: Boolean(data.isVerified),
      content: data.content ?? '',
      mediaUrl: data.mediaUrl ?? null,
      mediaType: data.mediaType ?? null,
      visibility: data.visibility ?? 'public',
      hashtags: parseHashtags(data.content ?? ''),
      mentionedUsers: parseMentions(data.content ?? ''),
      likesCount: 0,
      commentsCount: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const created = await addDoc(collection(db, 'posts'), payload);
    await updateDoc(doc(db, 'posts', created.id), { postId: created.id, updatedAt: serverTimestamp() });
    return { id: created.id, postId: created.id, ...payload, createdAt: clientNow, updatedAt: clientNow };
  } catch (error) {
    throw new Error(error.message || 'Failed to create post');
  }
}

export async function fetchPublicPosts(lastDocRef = null, pageSize = DEFAULT_PAGE_SIZE) {
  try {
    const constraints = [
      where('visibility', '==', 'public'),
      orderBy('createdAt', 'desc'),
      limit(pageSize),
    ];
    if (lastDocRef) constraints.push(startAfter(lastDocRef));

    const snapshot = await getDocs(query(collection(db, 'posts'), ...constraints));
    return {
      posts: snapshot.docs.map((item) => ({ id: item.id, ...item.data() })),
      lastDoc: snapshot.docs[snapshot.docs.length - 1] ?? null,
    };
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch public posts');
  }
}

export async function fetchFollowingPosts(userIds = [], lastDocRef = null, pageSize = DEFAULT_PAGE_SIZE) {
  try {
    if (!userIds.length) return { posts: [], lastDoc: null };
    const constraints = [
      where('userId', 'in', userIds.slice(0, 10)),
      orderBy('createdAt', 'desc'),
      limit(pageSize),
    ];
    if (lastDocRef) constraints.push(startAfter(lastDocRef));
    const snapshot = await getDocs(query(collection(db, 'posts'), ...constraints));
    return {
      posts: snapshot.docs.map((item) => ({ id: item.id, ...item.data() })),
      lastDoc: snapshot.docs[snapshot.docs.length - 1] ?? null,
    };
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch following posts');
  }
}

export async function likePost(postId, actor) {
  try {
    if (!actor?.uid) throw new Error('Missing actor uid');
    const postSnap = await getDoc(doc(db, 'posts', postId));
    if (!postSnap.exists()) throw new Error('Post not found');
    const postData = postSnap.data();

    const batch = writeBatch(db);
    batch.set(doc(db, 'posts', postId, 'likes', actor.uid), { userId: actor.uid, createdAt: serverTimestamp() });
    batch.update(doc(db, 'posts', postId), { likesCount: increment(1), updatedAt: serverTimestamp() });

    const targetUid = postData.userId;
    if (targetUid && targetUid !== actor.uid) {
      batchCreateNotification(batch, targetUid, {
        type: 'like',
        fromUid: actor.uid,
        fromDisplayName: actor.displayName ?? '',
        fromPhotoURL: actor.photoURL ?? null,
        fromIsVerified: Boolean(actor.isVerified),
        postId,
      });
    }

    await batch.commit();
  } catch (error) {
    throw new Error(error.message || 'Failed to like post');
  }
}

export async function unlikePost(postId, uid) {
  try {
    const batch = writeBatch(db);
    batch.delete(doc(db, 'posts', postId, 'likes', uid));
    batch.update(doc(db, 'posts', postId), { likesCount: increment(-1), updatedAt: serverTimestamp() });
    await batch.commit();
  } catch (error) {
    throw new Error(error.message || 'Failed to unlike post');
  }
}

export async function addComment(postId, content, actor) {
  try {
    if (!actor?.uid) throw new Error('Missing actor uid');
    const postSnap = await getDoc(doc(db, 'posts', postId));
    if (!postSnap.exists()) throw new Error('Post not found');
    const postData = postSnap.data();

    const commentRef = await addDoc(collection(db, 'posts', postId, 'comments'), {
      userId: actor.uid,
      displayName: actor.displayName ?? 'User',
      photoURL: actor.photoURL ?? null,
      isVerified: Boolean(actor.isVerified),
      content,
      mentionedUsers: parseMentions(content),
      createdAt: serverTimestamp(),
    });
    await updateDoc(doc(db, 'posts', postId), { commentsCount: increment(1), updatedAt: serverTimestamp() });

    const targetUid = postData.userId;
    if (targetUid && targetUid !== actor.uid) {
      await addDoc(collection(db, 'notifications', targetUid, 'items'), {
        type: 'comment',
        fromUid: actor.uid,
        fromDisplayName: actor.displayName ?? '',
        fromPhotoURL: actor.photoURL ?? null,
        fromIsVerified: Boolean(actor.isVerified),
        postId,
        commentId: commentRef.id,
        preview: String(content || '').slice(0, 140),
        read: false,
        createdAt: serverTimestamp(),
      });
    }

    return commentRef.id;
  } catch (error) {
    throw new Error(error.message || 'Failed to add comment');
  }
}

export async function deleteComment(postId, commentId, actorUid, actorRole = 'user') {
  try {
    const canDelete = await canDeleteComment(postId, commentId, actorUid, actorRole);
    if (!canDelete) {
      throw new Error('You are not authorized to delete this comment');
    }
    await deleteDoc(doc(db, 'posts', postId, 'comments', commentId));
    await updateDoc(doc(db, 'posts', postId), { commentsCount: increment(-1), updatedAt: serverTimestamp() });
  } catch (error) {
    throw new Error(error.message || 'Failed to delete comment');
  }
}

export async function updatePost(postId, data) {
  try {
    if (!data?.actorUid) {
      throw new Error('Missing actor uid for update post');
    }
    const canUpdate = await canManagePost(postId, data.actorUid, data.actorRole ?? 'user');
    if (!canUpdate) {
      throw new Error('You are not authorized to update this post');
    }

    const { actorUid, actorRole, ...safeData } = data;
    await updateDoc(doc(db, 'posts', postId), {
      ...safeData,
      hashtags: parseHashtags(safeData.content ?? ''),
      mentionedUsers: parseMentions(safeData.content ?? ''),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw new Error(error.message || 'Failed to update post');
  }
}

export async function deletePost(postId, actorUid, actorRole = 'user') {
  try {
    const canDelete = await canManagePost(postId, actorUid, actorRole);
    if (!canDelete) {
      throw new Error('You are not authorized to delete this post');
    }
    await deleteDoc(doc(db, 'posts', postId));
  } catch (error) {
    throw new Error(error.message || 'Failed to delete post');
  }
}

export async function canManagePost(postId, uid, role = 'user') {
  if (role === 'admin') return true;
  const postDoc = await getDoc(doc(db, 'posts', postId));
  return postDoc.exists() && postDoc.data().userId === uid;
}

export async function canDeleteComment(postId, commentId, uid, role = 'user') {
  if (role === 'admin') return true;
  const commentDoc = await getDoc(doc(db, 'posts', postId, 'comments', commentId));
  return commentDoc.exists() && commentDoc.data().userId === uid;
}
