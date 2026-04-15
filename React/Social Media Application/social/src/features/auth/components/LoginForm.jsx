import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../../shared/utils/validators';

/**
 * @param {{onSubmit: (values: {email: string, password: string}) => void, loading: boolean}} props
 */
export default function LoginForm({ onSubmit, loading }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className='w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 outline-none dark:border-slate-700 dark:bg-slate-900/60'
          placeholder='Email'
          {...register('email')}
        />
        {errors.email && <p className='mt-1 text-xs text-rose-500'>{errors.email.message}</p>}
      </div>
      <div>
        <div className='flex items-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-3 dark:border-slate-700 dark:bg-slate-900/60'>
          <input
            className='w-full bg-transparent py-2 outline-none'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            {...register('password')}
          />
          <button className='text-xs text-primary' type='button' onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <p className='mt-1 text-xs text-rose-500'>{errors.password.message}</p>}
      </div>
      <button
        type='submit'
        disabled={loading}
        className='w-full rounded-lg bg-primary px-4 py-2 font-medium text-white disabled:opacity-60'
      >
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}
