import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../../shared/components/Navbar';
import PostForm from '../components/PostForm';
import PostFeed from '../components/PostFeed';
import usePosts from '../hooks/usePosts';
import { createPost } from '../services/postService';

export default function FeedPage() {
  const user = useSelector((state) => state.auth.user);
  const { posts, loading, hasMore, loadMore, prependPost } = usePosts({ mode: 'public' });
  const [submitting, setSubmitting] = useState(false);

  const submitPost = async (values) => {
    try {
      setSubmitting(true);
      const createdPost = await createPost({
        ...values,
        userId: user.uid,
        displayName: user.displayName ?? 'User',
        photoURL: user.photoURL ?? null,
        isVerified: Boolean(user.isVerified),
        visibility: 'public',
      });
      prependPost(createdPost);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className='feed-shell'>
        <div className='mb-3 rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70'>
          <h1 className='text-base font-semibold'>For you</h1>
          <p className='text-xs text-slate-500'>Fresh public posts in a compact timeline.</p>
        </div>
        <PostForm onSubmit={submitPost} loading={submitting} />
        <PostFeed posts={posts} loading={loading} hasMore={hasMore} loadMore={loadMore} currentUser={user} />
      </main>
    </>
  );
}
