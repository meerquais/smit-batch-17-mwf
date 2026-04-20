import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  collection,
  getDocs,
  where,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';

export async function getUserById(uid) {
  try {
    const snapshot = await getDoc(doc(db, 'users', uid));
    return snapshot.exists() ? snapshot.data() : null;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch user');
  }
}

export async function updateProfile(uid, payload) {
  try {
    await updateDoc(doc(db, 'users', uid), {
      ...payload,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw new Error(error.message || 'Failed to update profile');
  }
}

export async function blockUser(currentUid, targetUid) {
  try {
    await updateDoc(doc(db, 'users', currentUid), {
      blockedUsers: arrayUnion(targetUid),
      updatedAt: serverTimestamp(),
    });
    await updateDoc(doc(db, 'users', currentUid), {
      followers: arrayRemove(targetUid),
      following: arrayRemove(targetUid),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw new Error(error.message || 'Failed to block user');
  }
}

export async function unblockUser(currentUid, targetUid) {
  try {
    await updateDoc(doc(db, 'users', currentUid), {
      blockedUsers: arrayRemove(targetUid),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw new Error(error.message || 'Failed to unblock user');
  }
}

export async function searchUsersByName(term) {
  try {
    const normalized = term.trim();
    if (!normalized) return [];

    const snapshot = await getDocs(
      query(collection(db, 'users'), orderBy('displayName'), limit(10)),
    );

    return snapshot.docs
      .map((item) => item.data())
      .filter((item) =>
        (item.displayName || '').toLowerCase().includes(normalized.toLowerCase()),
      );
  } catch (error) {
    throw new Error(error.message || 'Failed to search users');
  }
}

export async function getUserFeedAuthors(uid) {
  const snapshot = await getDoc(doc(db, 'users', uid));
  if (!snapshot.exists()) return [];
  const { following = [] } = snapshot.data();
  return Array.isArray(following) ? following.slice(0, 10) : [];
}
