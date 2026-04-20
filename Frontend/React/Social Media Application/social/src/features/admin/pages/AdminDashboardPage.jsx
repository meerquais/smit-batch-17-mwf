import { useEffect, useMemo, useState } from 'react';
import useDebounce from '../../../shared/hooks/useDebounce';
import Navbar from '../../../shared/components/Navbar';
import AnalyticsCards from '../components/AnalyticsCards';
import UserTable from '../components/UserTable';
import PostTable from '../components/PostTable';
import ReportsTable from '../components/ReportsTable';
import {
  deletePostAdmin,
  getAllPosts,
  getAllReports,
  getAllUsers,
  getDashboardStats,
  toggleVerification,
  updateReportStatus,
  updateUserStatus,
} from '../services/adminService';

const TABS = ['users', 'posts', 'reports'];

export default function AdminDashboardPage() {
  const [tab, setTab] = useState('users');
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [reports, setReports] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    pendingReports: 0,
    newUsersThisWeek: 0,
  });

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const load = async () => {
      const [usersRes, postsRes, reportsRes, statsRes] = await Promise.all([
        getAllUsers(),
        getAllPosts(),
        getAllReports(),
        getDashboardStats(),
      ]);
      setUsers(usersRes.users);
      setPosts(postsRes.posts);
      setReports(reportsRes.reports);
      setStats((prev) => ({ ...prev, ...statsRes }));
    };
    load();
  }, []);

  const filteredUsers = useMemo(() => {
    const term = debouncedSearch.trim().toLowerCase();
    if (!term) return users;
    return users.filter(
      (user) =>
        (user.displayName || '').toLowerCase().includes(term) ||
        (user.email || '').toLowerCase().includes(term),
    );
  }, [debouncedSearch, users]);

  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-6xl space-y-4 p-4'>
        <AnalyticsCards stats={stats} />
        <div className='flex flex-wrap gap-2'>
          {TABS.map((item) => (
            <button
              key={item}
              className={`rounded-full px-4 py-1.5 text-sm capitalize ${tab === item ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800'}`}
              type='button'
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {tab === 'users' && (
          <>
            <input
              className='w-full rounded-xl border border-slate-300 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/60'
              placeholder='Search users by name or email'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <UserTable
              users={filteredUsers}
              onToggleDisabled={async (user) => {
                await updateUserStatus(user.id, !user.isDisabled);
                setUsers((prev) =>
                  prev.map((item) =>
                    item.id === user.id ? { ...item, isDisabled: !item.isDisabled } : item,
                  ),
                );
              }}
              onToggleVerified={async (user) => {
                await toggleVerification(user.id, !user.isVerified);
                setUsers((prev) =>
                  prev.map((item) =>
                    item.id === user.id ? { ...item, isVerified: !item.isVerified } : item,
                  ),
                );
              }}
            />
          </>
        )}
        {tab === 'posts' && (
          <PostTable
            posts={posts}
            onDelete={async (postId) => {
              await deletePostAdmin(postId);
              setPosts((prev) => prev.filter((item) => item.id !== postId));
            }}
          />
        )}
        {tab === 'reports' && (
          <ReportsTable
            reports={reports}
            onUpdate={async (reportId, status, note) => {
              await updateReportStatus(reportId, status, note);
              setReports((prev) =>
                prev.map((item) => (item.id === reportId ? { ...item, status, adminNote: note } : item)),
              );
            }}
          />
        )}
      </main>
    </>
  );
}
