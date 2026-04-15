import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';

export default function useFirestoreListener(reference, enabled = true) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(Boolean(enabled));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled || !reference) {
      setLoading(false);
      return undefined;
    }

    const unsubscribe = onSnapshot(
      reference,
      (snapshot) => {
        const records = snapshot.docs
          ? snapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
          : snapshot.data();
        setData(records);
        setLoading(false);
      },
      (snapshotError) => {
        setError(snapshotError);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, [enabled, reference]);

  return { data, loading, error };
}
