import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema } from '../../../shared/utils/validators';

/**
 * @param {{initialValues?: any, onSubmit: (values: {displayName: string, bio?: string, avatar?: string}) => Promise<void>}} props
 */
export default function EditProfileForm({ initialValues, onSubmit }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: initialValues?.displayName || '',
      bio: initialValues?.bio || '',
      avatar: initialValues?.photoURL || '',
    },
  });

  useEffect(() => {
    reset({
      displayName: initialValues?.displayName || '',
      bio: initialValues?.bio || '',
      avatar: initialValues?.photoURL || '',
    });
  }, [initialValues?.bio, initialValues?.displayName, initialValues?.photoURL, reset]);

  return (
    <form className='space-y-3 rounded-xl border border-slate-200 p-4 dark:border-slate-800' onSubmit={handleSubmit(onSubmit)}>
      <input className='w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50' placeholder='Display name' {...register('displayName')} />
      {errors.displayName && <p className='text-xs text-rose-500'>{errors.displayName.message}</p>}
      <textarea className='w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50' placeholder='Bio' {...register('bio')} />
      {errors.bio && <p className='text-xs text-rose-500'>{errors.bio.message}</p>}
      <input className='w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50' placeholder='Avatar URL' {...register('avatar')} />
      {errors.avatar && <p className='text-xs text-rose-500'>{errors.avatar.message}</p>}
      <button className='rounded-lg bg-primary px-4 py-2 text-sm text-white' type='submit'>Save profile</button>
    </form>
  );
}
