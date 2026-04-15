/**
 * @param {{blockedUsers: string[], onUnblock: (uid: string) => Promise<void>}} props
 */
export default function BlockList({ blockedUsers, onUnblock }) {
  return (
    <section className='rounded-xl border border-slate-200 p-4 dark:border-slate-800'>
      <h2 className='mb-3 text-sm font-semibold'>Blocked users</h2>
      {!blockedUsers?.length && <p className='text-sm text-slate-500'>No blocked users.</p>}
      <div className='space-y-2'>
        {blockedUsers?.map((uid) => (
          <div key={uid} className='flex items-center justify-between'>
            <span className='text-sm'>{uid}</span>
            <button className='rounded bg-slate-300 px-2 py-1 text-xs dark:bg-slate-700' onClick={() => onUnblock(uid)} type='button'>
              Unblock
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
