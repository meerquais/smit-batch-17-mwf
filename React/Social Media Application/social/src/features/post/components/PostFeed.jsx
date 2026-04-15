import useInfiniteScroll from '../hooks/useInfiniteScroll';
import PostCard from './PostCard';

/**
 * @param {{posts: any[], hasMore: boolean, loading: boolean, loadMore: () => Promise<void>, currentUser?: any}} props
 */
export default function PostFeed({ posts, hasMore, loading, loadMore, currentUser }) {
  const { sentinelRef } = useInfiniteScroll(loadMore, hasMore, loading);

  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} currentUser={currentUser} />
      ))}
      {loading && <p className='p-3 text-sm text-slate-500'>Loading more posts...</p>}
      <div ref={sentinelRef} />
      {!hasMore && <p className='p-3 text-sm text-slate-500'>No more posts.</p>}
    </section>
  );
}
