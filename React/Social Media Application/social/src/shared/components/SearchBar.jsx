import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useDebounce from '../hooks/useDebounce';
import { searchUsersByName } from '../../features/user/services/userService';
import { fetchPublicPosts } from '../../features/post/services/postService';

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const debounced = useDebounce(query, 300);

  useEffect(() => {
    const load = async () => {
      if (!debounced.trim()) {
        setUsers([]);
        setPosts([]);
        setActiveIndex(0);
        return;
      }

      const [usersResult, postsResult] = await Promise.all([
        searchUsersByName(debounced),
        fetchPublicPosts(null, 20),
      ]);

      const lowered = debounced.toLowerCase();
      setUsers(usersResult.slice(0, 5));
      setPosts(
        postsResult.posts
          .filter((post) => (post.content || '').toLowerCase().includes(lowered))
          .slice(0, 5),
      );
      setActiveIndex(0);
    };

    load();
  }, [debounced]);

  const results = [...users.map((item) => ({ type: 'user', item })), ...posts.map((item) => ({ type: 'post', item }))];

  const onKeyDown = (event) => {
    if (!results.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const selected = results[activeIndex];
      if (!selected) return;
      if (selected.type === 'user') navigate(`/profile/${selected.item.uid}`);
      if (selected.type === 'post') navigate('/feed');
    }
  };

  return (
    <div className='relative'>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder='Search users and posts'
        className='w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-700'
      />
      {results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className='absolute z-20 mt-2 w-full rounded-lg border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900'
        >
          {results.map((result, index) => (
            <button
              key={`${result.type}-${result.item.id || result.item.uid}-${index}`}
              className={`mb-1 w-full rounded px-2 py-2 text-left text-sm ${index === activeIndex ? 'bg-slate-100 dark:bg-slate-800' : ''}`}
              type='button'
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => {
                if (result.type === 'user') navigate(`/profile/${result.item.uid}`);
                if (result.type === 'post') navigate('/feed');
              }}
            >
              {result.type === 'user'
                ? `${result.item.displayName} (${result.item.email})`
                : `Post: ${(result.item.content || '').slice(0, 60)}`}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
