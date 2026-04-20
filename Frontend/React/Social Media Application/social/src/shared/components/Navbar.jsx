import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { logoutAsync } from '../../features/auth/store/authSlice';

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className='sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/75'>
      <div className='mx-auto flex max-w-6xl items-center gap-3 p-3'>
        <Link className='rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary' to='/feed'>
          SocialApp
        </Link>
        <div className='flex-1'>
          <SearchBar />
        </div>
        <nav className='hidden items-center gap-1 text-sm md:flex'>
          <Link className='rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to='/feed'>Feed</Link>
          <Link className='rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to='/private-feed'>Private</Link>
          <Link className='rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to='/notifications'>Notifications</Link>
          <Link className='rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to={`/profile/${user?.uid || ''}`}>Profile</Link>
          <Link className='rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to='/settings'>Settings</Link>
          {user?.role === 'admin' && <Link className='rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to='/admin'>Admin</Link>}
        </nav>
        <button
          type='button'
          className='rounded-full border border-slate-300 px-3 py-1 text-xs dark:border-slate-700'
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? 'Light' : 'Dark'}
        </button>

        {user ? (
          <button
            type='button'
            className='rounded-full bg-slate-900 px-3 py-1 text-xs text-white dark:bg-slate-100 dark:text-slate-900'
            onClick={async () => {
              await dispatch(logoutAsync());
              navigate('/login');
            }}
          >
            Logout
          </button>
        ) : (
          <div className='flex items-center gap-2 text-xs'>
            <Link className='rounded-full border border-slate-300 px-3 py-1 dark:border-slate-700' to='/login'>Login</Link>
            <Link className='rounded-full bg-primary px-3 py-1 text-white' to='/register'>Sign up</Link>
          </div>
        )}
      </div>
    </header>
  );
}
