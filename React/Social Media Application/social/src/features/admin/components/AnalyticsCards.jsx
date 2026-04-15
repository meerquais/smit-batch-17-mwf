/**
 * @param {{stats: {totalUsers: number, totalPosts: number, pendingReports: number, newUsersThisWeek: number}}} props
 */
export default function AnalyticsCards({ stats }) {
  const cards = [
    ['Total Users', stats.totalUsers],
    ['Total Posts', stats.totalPosts],
    ['Pending Reports', stats.pendingReports],
    ['New Users This Week', stats.newUsersThisWeek],
  ];

  return (
    <section className='grid grid-cols-1 gap-3 md:grid-cols-4'>
      {cards.map(([label, value]) => (
        <div key={label} className='rounded-xl border border-slate-200 p-4 dark:border-slate-800'>
          <p className='text-xs text-slate-500'>{label}</p>
          <p className='mt-1 text-2xl font-semibold'>{value}</p>
        </div>
      ))}
    </section>
  );
}
