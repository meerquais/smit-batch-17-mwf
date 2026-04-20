import { motion } from 'framer-motion';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { useAuth } from '../hooks/useAuth';
import { registerAsync } from '../store/authSlice';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useAuth();

  if (user) return <Navigate to='/feed' replace />;

  const handleRegister = async (values) => {
    const result = await dispatch(registerAsync(values));
    if (registerAsync.fulfilled.match(result)) {
      navigate('/feed');
    }
  };

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center p-4'>
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-md dark:bg-black/20'>
        <p className='inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary'>Get started</p>
        <h1 className='mt-3 text-2xl font-semibold'>Create account</h1>
        <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>Join the social app.</p>
        <div className='mt-6'>
          <RegisterForm onSubmit={handleRegister} loading={status === 'loading'} />
        </div>
        {error && <p className='mt-3 text-sm text-rose-500'>{error}</p>}
        <p className='mt-4 text-sm'>
          Already have an account? <Link className='text-primary' to='/login'>Sign in</Link>
        </p>
      </motion.section>
    </div>
  );
}
