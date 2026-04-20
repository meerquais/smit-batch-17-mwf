/**
 * @param {{requests: string[], onAccept: (uid: string) => Promise<void>, onReject: (uid: string) => Promise<void>}} props
 */
export default function FollowRequestList({ requests, onAccept, onReject }) {
  if (!requests?.length) return null;

  return (
    <section className='rounded-xl border border-slate-200 p-4 dark:border-slate-800'>
      <h3 className='mb-3 text-sm font-semibold'>Follow requests</h3>
      <div className='space-y-2'>
        {requests.map((uid) => (
          <div key={uid} className='flex items-center justify-between'>
            <span className='text-sm'>{uid}</span>
            <div className='flex gap-2'>
              <button className='rounded bg-emerald-500 px-2 py-1 text-xs text-white' type='button' onClick={() => onAccept(uid)}>Accept</button>
              <button className='rounded bg-slate-300 px-2 py-1 text-xs dark:bg-slate-700' type='button' onClick={() => onReject(uid)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
