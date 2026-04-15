import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../shared/utils/formatDate';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';
import { addComment, likePost, unlikePost } from '../services/postService';
import UserAvatar from '../../user/components/UserAvatar';
import { db } from '../../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

/**
 * @param {{post: any, currentUser?: any}} props
 */
export default function PostCard({ post, currentUser }) {
  const currentUserId = currentUser?.uid;
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likesCount ?? 0);
  const [commentsCount, setCommentsCount] = useState(post.commentsCount ?? 0);

  const mentionFormat = useMemo(
    () => (text) =>
      text.split(' ').map((word, index) => {
      if (word.startsWith('@')) {
        return (
          <Link key={`${word}-${index}`} className='text-sky-500' to={`/profile/${word.slice(1)}`}>
            {word}{' '}
          </Link>
        );
      }
      if (word.startsWith('#')) {
        return (
          <Link key={`${word}-${index}`} className='text-primary' to={`/search?tag=${word.slice(1)}`}>
            {word}{' '}
          </Link>
        );
      }
      return `${word} `;
      }),
    [],
  );

  useEffect(() => {
    let cancelled = false;
    async function hydrateLikeState() {
      if (!currentUserId || !post?.id) return;
      try {
        const snap = await getDoc(doc(db, 'posts', post.id, 'likes', currentUserId));
        if (!cancelled) setLiked(snap.exists());
      } catch {
        // ignore
      }
    }
    hydrateLikeState();
    return () => {
      cancelled = true;
    };
  }, [currentUserId, post?.id]);

  const toggleLike = async () => {
    if (!currentUserId) return;
    if (liked) {
      await unlikePost(post.id, currentUserId);
      setLikesCount((prev) => Math.max(0, prev - 1));
    } else {
      await likePost(post.id, currentUser);
      setLikesCount((prev) => prev + 1);
    }
    setLiked((prev) => !prev);
  };

  const handleComment = async (content) => {
    if (!currentUserId) return;
    await addComment(post.id, content, currentUser);
    setCommentsCount((prev) => prev + 1);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='mb-3 rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70'
    >
      <div className='mb-2 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Link className='flex items-center gap-2' to={`/profile/${post.userId}`}>
            <UserAvatar size='sm' displayName={post.displayName || 'User'} photoURL={post.photoURL || undefined} />
            <div>
              <p className='text-sm font-semibold'>
                {post.displayName || 'User'}
                {post.isVerified && <span className='ml-1 text-sky-500'>✓</span>}
              </p>
              <p className='text-xs text-slate-500'>{formatDate(post.createdAt)}</p>
            </div>
          </Link>
        </div>
      </div>
      <p className='text-sm leading-6 text-slate-700 dark:text-slate-200'>{mentionFormat(post.content ?? '')}</p>
      {post.mediaUrl && <img className='mt-3 max-h-[420px] w-full rounded-xl object-cover' src={post.mediaUrl} alt='Post media' />}
      <div className='mt-3 flex gap-2 border-t border-slate-200/80 pt-2 dark:border-slate-800'>
        <LikeButton liked={liked} count={likesCount} onToggle={toggleLike} />
      </div>
      <CommentSection postId={post.id} commentsCount={commentsCount} onAddComment={handleComment} />
    </motion.article>
  );
}
