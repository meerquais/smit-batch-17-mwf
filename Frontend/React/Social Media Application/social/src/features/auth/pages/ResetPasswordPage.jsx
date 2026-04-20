import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Navigate } from 'react-router-dom';
import ResetPasswordForm from '../components/ResetPasswordForm';
import { resetPassword } from '../services/authService';
import { useAuth } from '../hooks/useAuth';

export default function ResetPasswordPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  if (user) return <Navigate to='/feed' replace />;

  const handleReset = async ({ email }) => {
    try {
      setLoading(true);
      setError('');
      await resetPassword(email);
      setMessage('Password reset email sent.');
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center p-4'>
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-md dark:bg-black/20'>
        <p className='inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary'>Security</p>
        <h1 className='mt-3 text-2xl font-semibold'>Reset password</h1>
        <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>We will send you a password reset link.</p>
        <div className='mt-6'>
          <ResetPasswordForm onSubmit={handleReset} loading={loading} />
        </div>
        {message && <p className='mt-3 text-sm text-emerald-500'>{message}</p>}
        {error && <p className='mt-3 text-sm text-rose-500'>{error}</p>}
        <p className='mt-4 text-sm'>
          Back to <Link className='text-primary' to='/login'>login</Link>
        </p>
      </motion.section>
    </div>
  );
}
