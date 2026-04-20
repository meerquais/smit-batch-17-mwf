import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema } from '../../../shared/utils/validators';

/**
 * @param {{onSubmit: (values: {email: string}) => void, loading: boolean}} props
 */
export default function ResetPasswordForm({ onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { email: '' },
  });

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className='w-full rounded-lg border border-slate-300 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/60'
          placeholder='Email'
          {...register('email')}
        />
        {errors.email && <p className='mt-1 text-xs text-rose-500'>{errors.email.message}</p>}
      </div>
      <button type='submit' disabled={loading} className='w-full rounded-lg bg-primary px-4 py-2 font-medium text-white disabled:opacity-60'>
        {loading ? 'Sending...' : 'Send reset email'}
      </button>
    </form>
  );
}
