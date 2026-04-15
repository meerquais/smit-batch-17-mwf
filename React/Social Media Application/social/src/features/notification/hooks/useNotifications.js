import { collection, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import useFirestoreListener from '../../../shared/hooks/useFirestoreListener';

export default function useNotifications(uid) {
  const ref = uid
    ? query(collection(db, 'notifications', uid, 'items'), orderBy('createdAt', 'desc'), limit(50))
    : null;

  return useFirestoreListener(ref, Boolean(uid));
}

