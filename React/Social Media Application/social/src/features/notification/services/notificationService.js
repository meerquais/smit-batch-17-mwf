import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../config/firebase';

export function notificationCollection(uid) {
  return collection(db, 'notifications', uid, 'items');
}

/**
 * @param {string} targetUid
 * @param {{type: 'like'|'comment'|'follow_request'|'follow', fromUid: string, fromDisplayName?: string, fromPhotoURL?: string|null, fromIsVerified?: boolean, postId?: string, commentId?: string, preview?: string}} payload
 */
export async function createNotification(targetUid, payload) {
  if (!targetUid) return;
  await addDoc(notificationCollection(targetUid), {
    ...payload,
    read: false,
    createdAt: serverTimestamp(),
  });
}

/**
 * Batched notification write (when already using a batch).
 * @param {import('firebase/firestore').WriteBatch} batch
 * @param {string} targetUid
 * @param {object} payload
 */
export function batchCreateNotification(batch, targetUid, payload) {
  if (!targetUid) return;
  const ref = doc(notificationCollection(targetUid));
  batch.set(ref, { ...payload, read: false, createdAt: serverTimestamp() });
}

