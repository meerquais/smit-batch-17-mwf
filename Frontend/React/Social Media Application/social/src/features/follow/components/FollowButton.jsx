import { motion } from 'framer-motion';

/**
 * @param {{isFollowing: boolean, pending?: boolean, onFollow: () => Promise<void>, onUnfollow: () => Promise<void>}} props
 */
export default function FollowButton({ isFollowing, pending = false, onFollow, onUnfollow }) {
  const handleClick = async () => {
    if (pending) return;
    if (isFollowing) {
      await onUnfollow();
      return;
    }
    await onFollow();
  };

  return (
    <motion.button
      layout
      whileTap={{ scale: 0.96 }}
      className='rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white'
      onClick={handleClick}
      type='button'
    >
      {pending ? 'Requested' : isFollowing ? 'Unfollow' : 'Follow'}
    </motion.button>
  );
}
