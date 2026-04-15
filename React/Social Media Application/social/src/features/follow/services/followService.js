import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';

export async function followUser(currentUid, targetUid) {
  try {
    const targetSnap = await getDoc(doc(db, 'users', targetUid));
    if (!targetSnap.exists()) throw new Error('Target user not found');
    const targetData = targetSnap.data();

    if (targetData.isPrivate) {
      await updateDoc(doc(db, 'users', targetUid), {
        followRequests: arrayUnion(currentUid),
        updatedAt: serverTimestamp(),
      });
      return { requested: true };
    }

    await updateDoc(doc(db, 'users', currentUid), {
      following: arrayUnion(targetUid),
      updatedAt: serverTimestamp(),
    });
    await updateDoc(doc(db, 'users', targetUid), {
      followers: arrayUnion(currentUid),
      updatedAt: serverTimestamp(),
    });
    return { requested: false };
  } catch (error) {
    throw new Error(error.message || 'Failed to follow user');
  }
}

export async function unfollowUser(currentUid, targetUid) {
  try {
    await updateDoc(doc(db, 'users', currentUid), {
      following: arrayRemove(targetUid),
      updatedAt: serverTimestamp(),
    });
    await updateDoc(doc(db, 'users', targetUid), {
      followers: arrayRemove(currentUid),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw new Error(error.message || 'Failed to unfollow user');
  }
}

export async function acceptFollowRequest(targetUid, requesterUid) {
  try {
    await updateDoc(doc(db, 'users', targetUid), {
      followRequests: arrayRemove(requesterUid),
      followers: arrayUnion(requesterUid),
      updatedAt: serverTimestamp(),
    });
    await updateDoc(doc(db, 'users', requesterUid), {
      following: arrayUnion(targetUid),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw new Error(error.message || 'Failed to accept follow request');
  }
}

export async function rejectFollowRequest(targetUid, requesterUid) {
  try {
    await updateDoc(doc(db, 'users', targetUid), {
      followRequests: arrayRemove(requesterUid),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw new Error(error.message || 'Failed to reject follow request');
  }
}

export async function blockUser(currentUid, targetUid) {
  try {
    await updateDoc(doc(db, 'users', currentUid), {
      blockedUsers: arrayUnion(targetUid),
      following: arrayRemove(targetUid),
      followers: arrayRemove(targetUid),
      updatedAt: serverTimestamp(),
    });
    await updateDoc(doc(db, 'users', targetUid), {
      followers: arrayRemove(currentUid),
      following: arrayRemove(currentUid),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw new Error(error.message || 'Failed to block user');
  }
}
