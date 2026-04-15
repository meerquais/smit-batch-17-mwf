import { useEffect, useState } from 'react';
import { getUserById } from '../services/userService';

export default function useUser(uid) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(Boolean(uid));
  const [error, setError] = useState(null);

  const load = async (activeRef) => {
    try {
      setLoading(true);
      const data = await getUserById(uid);
      if (activeRef.current) setUser(data);
    } catch (requestError) {
      if (activeRef.current) setError(requestError);
    } finally {
      if (activeRef.current) setLoading(false);
    }
  };

  useEffect(() => {
    if (!uid) {
      setUser(null);
      setLoading(false);
      return;
    }

    const activeRef = { current: true };
    load(activeRef);
    return () => {
      activeRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const refetch = async () => {
    if (!uid) return;
    const activeRef = { current: true };
    await load(activeRef);
  };

  return { user, loading, error, refetch };
}
