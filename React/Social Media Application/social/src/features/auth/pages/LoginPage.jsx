import { motion } from 'framer-motion';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';
import { loginAsync } from '../store/authSlice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useAuth();

  if (user) return <Navigate to='/feed' replace />;

  const handleLogin = async (values) => {
    const result = await dispatch(loginAsync(values));
    if (loginAsync.fulfilled.match(result)) {
      navigate('/feed');
    }
  };

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center p-4'>
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-md dark:bg-black/20'>
        <p className='inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary'>Welcome back</p>
        <h1 className='mt-3 text-2xl font-semibold'>Sign in to your account</h1>
        <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>Continue building your social presence.</p>
        <div className='mt-6'>
          <LoginForm onSubmit={handleLogin} loading={status === 'loading'} />
        </div>
        {error && <p className='mt-3 text-sm text-rose-500'>{error}</p>}
        <div className='mt-4 flex justify-between text-sm'>
          <Link className='text-primary' to='/register'>Create account</Link>
          <Link className='text-primary' to='/reset-password'>Forgot password?</Link>
        </div>
      </motion.section>
    </div>
  );
}
