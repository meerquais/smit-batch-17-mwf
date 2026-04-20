export default function SkeletonCard({ count = 1 }) {
  return Array.from({ length: count }).map((_, index) => (
    <div key={index} className='mb-3 rounded-xl border border-slate-200 p-4 dark:border-slate-800'>
      <div className='h-4 w-1/3 rounded bg-slate-200 dark:bg-slate-800' />
      <div className='mt-3 h-3 w-full rounded bg-slate-200 dark:bg-slate-800' />
      <div className='mt-2 h-3 w-5/6 rounded bg-slate-200 dark:bg-slate-800' />
    </div>
  ));
}
