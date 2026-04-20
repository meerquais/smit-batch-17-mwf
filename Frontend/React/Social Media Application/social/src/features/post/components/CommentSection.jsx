import { useState } from 'react';
import { collection, limit, orderBy, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../../../config/firebase';
import useFirestoreListener from '../../../shared/hooks/useFirestoreListener';
import UserAvatar from '../../user/components/UserAvatar';

/**
 * @param {{postId: string, commentsCount: number, onAddComment: (content: string) => Promise<void>}} props
 */
export default function CommentSection({ postId, commentsCount, onAddComment }) {
  const [comment, setComment] = useState('');
  const [expanded, setExpanded] = useState(false);

  const commentsQuery = postId
    ? query(collection(db, 'posts', postId, 'comments'), orderBy('createdAt', 'desc'), limit(20))
    : null;
  const { data: comments, loading } = useFirestoreListener(commentsQuery, Boolean(postId));

  const submit = async (event) => {
    event.preventDefault();
    if (!comment.trim()) return;
    await onAddComment(comment.trim());
    setComment('');
  };

  return (
    <div className='mt-2 border-t border-slate-200 pt-2 dark:border-slate-800'>
      <div className='flex items-center justify-between'>
        <p className='text-xs text-slate-500'>Comments: {commentsCount}</p>
        <button
          type='button'
          className='text-xs text-sky-600 hover:underline dark:text-sky-400'
          onClick={() => setExpanded((prev) => !prev)}
          disabled={!commentsCount}
        >
          {expanded ? 'Hide' : 'Show'}
        </button>
      </div>

      {expanded && (
        <div className='mt-2 space-y-2'>
          {loading && <p className='text-xs text-slate-500'>Loading comments...</p>}
          {!loading && (!comments?.length ? (
            <p className='text-xs text-slate-500'>No comments yet.</p>
          ) : (
            comments
              .slice()
              .reverse()
              .map((item) => (
                <div key={item.id} className='flex gap-2 rounded-xl bg-slate-50 p-2 dark:bg-slate-900/40'>
                  <Link to={`/profile/${item.userId}`}>
                    <UserAvatar size='sm' displayName={item.displayName || 'User'} photoURL={item.photoURL || undefined} />
                  </Link>
                  <div className='min-w-0'>
                    <p className='text-xs font-semibold text-slate-700 dark:text-slate-200'>
                      <Link className='hover:underline' to={`/profile/${item.userId}`}>
                        {item.displayName || 'User'}
                      </Link>
                      {item.isVerified && <span className='ml-1 text-sky-500'>✓</span>}
                    </p>
                    <p className='break-words text-xs text-slate-600 dark:text-slate-300'>{item.content}</p>
                  </div>
                </div>
              ))
          ))}
        </div>
      )}

      <form className='mt-2 flex gap-2' onSubmit={submit}>
        <input
          className='w-full rounded-lg border border-slate-300 bg-white/70 px-2 py-1 text-sm dark:border-slate-700 dark:bg-slate-900/40'
          placeholder='Write a comment'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button className='rounded-lg bg-primary px-3 text-sm text-white' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
}
