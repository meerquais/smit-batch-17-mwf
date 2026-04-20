import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../../shared/utils/validators';

/**
 * @param {{onSubmit: (values: {displayName: string, email: string, password: string, confirmPassword: string}) => void, loading: boolean}} props
 */
export default function RegisterForm({ onSubmit, loading }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { displayName: '', email: '', password: '', confirmPassword: '' },
  });

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input className='w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/60' placeholder='Display name' {...register('displayName')} />
        {errors.displayName && <p className='mt-1 text-xs text-rose-500'>{errors.displayName.message}</p>}
      </div>
      <div>
        <input className='w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/60' placeholder='Email' {...register('email')} />
        {errors.email && <p className='mt-1 text-xs text-rose-500'>{errors.email.message}</p>}
      </div>
      <div>
        <input className='w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/60' type={showPassword ? 'text' : 'password'} placeholder='Password' {...register('password')} />
        {errors.password && <p className='mt-1 text-xs text-rose-500'>{errors.password.message}</p>}
      </div>
      <div>
        <input className='w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/60' type={showPassword ? 'text' : 'password'} placeholder='Confirm password' {...register('confirmPassword')} />
        {errors.confirmPassword && <p className='mt-1 text-xs text-rose-500'>{errors.confirmPassword.message}</p>}
      </div>
      <button className='text-xs text-primary' type='button' onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? 'Hide passwords' : 'Show passwords'}
      </button>
      <button type='submit' disabled={loading} className='w-full rounded-lg bg-primary px-4 py-2 font-medium text-white disabled:opacity-60'>
        {loading ? 'Creating account...' : 'Create account'}
      </button>
    </form>
  );
}
