import { useSelector } from 'react-redux';
import Navbar from '../../../shared/components/Navbar';
import PostFeed from '../components/PostFeed';
import usePosts from '../hooks/usePosts';

export default function PrivateFeedPage() {
  const user = useSelector((state) => state.auth.user);
  const following = useSelector((state) => state.user.profile?.following ?? []);
  const { posts, loading, hasMore, loadMore } = usePosts({ mode: 'following', following });

  return (
    <>
      <Navbar />
      <main className='feed-shell'>
        <div className='mb-3 rounded-2xl border border-sky-200/80 bg-sky-50/70 p-3 shadow-sm dark:border-sky-900/50 dark:bg-sky-950/20'>
          <h1 className='text-base font-semibold'>Following</h1>
          <p className='text-xs text-slate-500'>Posts from people you follow.</p>
        </div>
        <PostFeed posts={posts} loading={loading} hasMore={hasMore} loadMore={loadMore} currentUser={user} />
      </main>
    </>
  );
}
