import { motion } from 'framer-motion';

/**
 * @param {{liked: boolean, count: number, onToggle: () => Promise<void>}} props
 */
export default function LikeButton({ liked, count, onToggle }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.03 }}
      className={`rounded-full px-3 py-1 text-sm transition ${liked ? 'bg-rose-100 text-rose-600 dark:bg-rose-500/20' : 'bg-slate-100 dark:bg-slate-800'}`}
      onClick={onToggle}
      type='button'
    >
      <span className='mr-1'>{liked ? '♥' : '♡'}</span>
      {count}
    </motion.button>
  );
}
