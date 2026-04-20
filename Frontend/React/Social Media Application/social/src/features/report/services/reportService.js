import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';

export async function createReport({
  reporterId,
  reportedUserId,
  postId = null,
  reason,
}) {
  try {
    const reportRef = await addDoc(collection(db, 'reports'), {
      reporterId,
      reportedUserId,
      postId,
      reason,
      status: 'pending',
      adminNote: '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    await updateDoc(doc(db, 'reports', reportRef.id), {
      reportId: reportRef.id,
      updatedAt: serverTimestamp(),
    });

    return reportRef.id;
  } catch (error) {
    throw new Error(error.message || 'Failed to create report');
  }
}
