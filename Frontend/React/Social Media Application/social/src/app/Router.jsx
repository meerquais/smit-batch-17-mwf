import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import ProtectedRoute from '../shared/components/ProtectedRoute';
import AdminRoute from '../shared/components/AdminRoute';
import SkeletonCard from '../shared/components/SkeletonCard';

const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('../features/auth/pages/RegisterPage'));
const ResetPasswordPage = lazy(() => import('../features/auth/pages/ResetPasswordPage'));
const FeedPage = lazy(() => import('../features/post/pages/FeedPage'));
const PrivateFeedPage = lazy(() => import('../features/post/pages/PrivateFeedPage'));
const ProfilePage = lazy(() => import('../features/user/pages/ProfilePage'));
const SettingsPage = lazy(() => import('../features/user/pages/SettingsPage'));
const SearchPage = lazy(() => import('../shared/pages/SearchPage'));
const AdminDashboardPage = lazy(() => import('../features/admin/pages/AdminDashboardPage'));
const NotFoundPage = lazy(() => import('../shared/pages/NotFoundPage'));
const NotificationsPage = lazy(() => import('../features/notification/pages/NotificationsPage'));

function PageFallback() {
  return <div className='mx-auto max-w-2xl p-4'><SkeletonCard count={3} /></div>;
}

function PublicOnlyRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  return user ? <Navigate to='/feed' replace /> : children;
}

export default function AppRouter() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageFallback />}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path='/' element={<Navigate to='/feed' replace />} />
            <Route path='/login' element={<PublicOnlyRoute><LoginPage /></PublicOnlyRoute>} />
            <Route path='/register' element={<PublicOnlyRoute><RegisterPage /></PublicOnlyRoute>} />
            <Route path='/reset-password' element={<PublicOnlyRoute><ResetPasswordPage /></PublicOnlyRoute>} />
            <Route path='/feed' element={<ProtectedRoute><FeedPage /></ProtectedRoute>} />
            <Route path='/private-feed' element={<ProtectedRoute><PrivateFeedPage /></ProtectedRoute>} />
            <Route path='/profile/:uid' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path='/settings' element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path='/search' element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
            <Route path='/notifications' element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
            <Route path='/admin' element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}
