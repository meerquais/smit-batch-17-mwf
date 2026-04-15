import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const { user, status } = useSelector((state) => state.auth);

  if (status === 'loading') return <div className='p-6 text-center'>Loading...</div>;
  if (!user) return <Navigate to='/login' replace />;

  return children;
}
