import { useSelector } from 'react-redux';
import Navbar from '../../../shared/components/Navbar';
import useNotifications from '../hooks/useNotifications';
import { Link } from 'react-router-dom';

function notifLabel(item) {
  const name = item.fromDisplayName || 'Someone';
  if (item.type === 'like') return `${name} liked your post`;
  if (item.type === 'comment') return `${name} commented on your post`;
  if (item.type === 'follow_request') return `${name} sent a follow request`;
  if (item.type === 'follow') return `${name} started following you`;
  return `${name} sent a notification`;
}

export default function NotificationsPage() {
  const user = useSelector((state) => state.auth.user);
  const { data: notifications, loading, error } = useNotifications(user?.uid);

  return (
    <>
      <Navbar />
      <main className='feed-shell space-y-3'>
        <div className='rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70'>
          <h1 className='text-base font-semibold'>Notifications</h1>
          <p className='text-xs text-slate-500'>Likes and comments on your posts.</p>
        </div>

        {loading && <p className='p-3 text-sm text-slate-500'>Loading notifications...</p>}
        {error && <p className='p-3 text-sm text-rose-500'>Failed to load notifications.</p>}

        {!loading && !notifications?.length && (
          <p className='p-3 text-sm text-slate-500'>No notifications yet.</p>
        )}

        <section className='space-y-2'>
          {(notifications || []).map((item) => (
            <article
              key={item.id}
              className='rounded-2xl border border-slate-200/80 bg-white/85 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/70'
            >
              <p className='text-sm font-medium text-slate-800 dark:text-slate-100'>
                {notifLabel(item)}
              </p>
              {item.preview && <p className='mt-1 text-xs text-slate-600 dark:text-slate-300'>“{item.preview}”</p>}
              <div className='mt-2 flex gap-2 text-xs'>
                <Link className='text-sky-600 hover:underline dark:text-sky-400' to={`/profile/${item.fromUid}`}>
                  View profile
                </Link>
                {item.postId && (
                  <Link className='text-sky-600 hover:underline dark:text-sky-400' to='/feed'>
                    Open feed
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

