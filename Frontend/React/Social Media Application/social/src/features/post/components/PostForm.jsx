import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postSchema } from '../../../shared/utils/validators';

/**
 * @param {{onSubmit: (values: {content: string, mediaUrl?: string}) => Promise<void>, loading: boolean}} props
 */
export default function PostForm({ onSubmit, loading }) {
  const [error, setError] = useState('');
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: { content: '', mediaUrl: '' },
  });

  const submit = async (values) => {
    try {
      setError('');
      await onSubmit(values);
      reset();
    } catch (submitError) {
      setError(submitError.message);
    }
  };

  return (
    <form className='mb-4 rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70' onSubmit={handleSubmit(submit)}>
      <textarea
        className='min-h-24 w-full rounded-xl border border-slate-300/80 bg-white/80 p-3 text-sm outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900/40'
        placeholder='What is happening? Use #hashtags and @mentions'
        {...register('content')}
      />
      {errors.content && <p className='mt-1 text-xs text-rose-500'>{errors.content.message}</p>}
      <input className='mt-2 w-full rounded-xl border border-slate-300/80 bg-white/80 p-2 text-sm outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900/40' placeholder='Optional media URL' {...register('mediaUrl')} />
      {errors.mediaUrl && <p className='mt-1 text-xs text-rose-500'>{errors.mediaUrl.message}</p>}
      {error && <p className='mt-1 text-xs text-rose-500'>{error}</p>}
      <button type='submit' disabled={loading} className='mt-3 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-110 disabled:opacity-70'>
        {loading ? 'Posting...' : 'Post'}
      </button>
    </form>
  );
}
