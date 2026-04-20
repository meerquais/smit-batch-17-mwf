import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className='hidden w-56 flex-col gap-2 rounded-xl border border-slate-200 p-3 dark:border-slate-800 md:flex'>
      <NavLink className='rounded px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to='/feed'>Public feed</NavLink>
      <NavLink className='rounded px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to='/private-feed'>Private feed</NavLink>
      <NavLink className='rounded px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to='/search'>Search</NavLink>
      <NavLink className='rounded px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800' to='/settings'>Settings</NavLink>
    </aside>
  );
}
