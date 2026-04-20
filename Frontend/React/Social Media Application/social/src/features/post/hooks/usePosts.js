import { useCallback, useEffect, useState } from 'react';
import { fetchFollowingPosts, fetchPublicPosts } from '../services/postService';

export default function usePosts({ mode = 'public', following = [] } = {}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState(null);

  const mergeUnique = useCallback((prev, next) => {
    const map = new Map();
    [...prev, ...next].forEach((post) => {
      const key = post?.id || post?.postId;
      if (key) map.set(key, { ...post, id: post.id || post.postId });
    });
    return Array.from(map.values());
  }, []);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    try {
      setLoading(true);
      const response =
        mode === 'following'
          ? await fetchFollowingPosts(following, lastDoc, 10)
          : await fetchPublicPosts(lastDoc, 10);

      setPosts((prev) => mergeUnique(prev, response.posts));
      setLastDoc(response.lastDoc);
      if (!response.lastDoc || response.posts.length < 10) {
        setHasMore(false);
      }
    } finally {
      setLoading(false);
    }
  }, [following, hasMore, lastDoc, loading, mergeUnique, mode]);

  useEffect(() => {
    setPosts([]);
    setLastDoc(null);
    setHasMore(true);
  }, [mode, following.join(',')]);

  useEffect(() => {
    if (!posts.length && hasMore && !loading) {
      loadMore();
    }
  }, [hasMore, loadMore, loading, posts.length]);

  const prependPost = useCallback((post) => {
    if (!post) return;
    const normalized = { ...post, id: post.id || post.postId };
    setPosts((prev) => mergeUnique([normalized], prev));
  }, [mergeUnique]);

  const refresh = useCallback(() => {
    setPosts([]);
    setLastDoc(null);
    setHasMore(true);
  }, []);

  return { posts, loading, hasMore, loadMore, prependPost, refresh };
}
