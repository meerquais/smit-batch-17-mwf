import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  startAfter,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';

export async function getAllUsers(lastDocRef = null, pageSize = 10) {
  const constraints = [orderBy('createdAt', 'desc'), limit(pageSize)];
  if (lastDocRef) constraints.push(startAfter(lastDocRef));
  const snapshot = await getDocs(query(collection(db, 'users'), ...constraints));
  return {
    users: snapshot.docs.map((item) => ({ id: item.id, ...item.data() })),
    lastDoc: snapshot.docs[snapshot.docs.length - 1] ?? null,
  };
}

export async function updateUserStatus(uid, isDisabled) {
  await updateDoc(doc(db, 'users', uid), { isDisabled, updatedAt: serverTimestamp() });
}

export async function toggleVerification(uid, isVerified) {
  await updateDoc(doc(db, 'users', uid), { isVerified, updatedAt: serverTimestamp() });
}

export async function getAllPosts(lastDocRef = null, pageSize = 10) {
  const constraints = [orderBy('createdAt', 'desc'), limit(pageSize)];
  if (lastDocRef) constraints.push(startAfter(lastDocRef));
  const snapshot = await getDocs(query(collection(db, 'posts'), ...constraints));
  return {
    posts: snapshot.docs.map((item) => ({ id: item.id, ...item.data() })),
    lastDoc: snapshot.docs[snapshot.docs.length - 1] ?? null,
  };
}

export async function deletePostAdmin(postId) {
  await deleteDoc(doc(db, 'posts', postId));
}

export async function getAllReports(status = null, lastDocRef = null, pageSize = 10) {
  const constraints = [orderBy('createdAt', 'desc'), limit(pageSize)];
  if (status) constraints.unshift(where('status', '==', status));
  if (lastDocRef) constraints.push(startAfter(lastDocRef));
  const snapshot = await getDocs(query(collection(db, 'reports'), ...constraints));
  return {
    reports: snapshot.docs.map((item) => ({ id: item.id, ...item.data() })),
    lastDoc: snapshot.docs[snapshot.docs.length - 1] ?? null,
  };
}

export async function updateReportStatus(reportId, status, note = '') {
  await updateDoc(doc(db, 'reports', reportId), {
    status,
    adminNote: note,
    updatedAt: serverTimestamp(),
  });
}

export async function getDashboardStats() {
  const [usersSnap, postsSnap, pendingReportsSnap] = await Promise.all([
    getCountFromServer(collection(db, 'users')),
    getCountFromServer(collection(db, 'posts')),
    getCountFromServer(query(collection(db, 'reports'), where('status', '==', 'pending'))),
  ]);

  return {
    totalUsers: usersSnap.data().count,
    totalPosts: postsSnap.data().count,
    pendingReports: pendingReportsSnap.data().count,
  };
}
