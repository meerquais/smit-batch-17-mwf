import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AdminRoute({ children }) {
  const { user, status } = useSelector((state) => state.auth);

  if (status === 'loading') return <div className='p-6 text-center'>Loading...</div>;
  if (!user) return <Navigate to='/login' replace />;
  if (user.role !== 'admin') return <Navigate to='/feed' replace />;

  return children;
}
