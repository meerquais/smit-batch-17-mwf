import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/authSlice';
import { onAuthStateChange } from '../services/authService';

export function useAuth() {
  return useSelector((state) => state.auth);
}

export function useAuthBootstrap() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      dispatch(setUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
}
