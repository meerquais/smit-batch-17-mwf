/**
 * @param {{open: boolean, title?: string, onClose: () => void, children: React.ReactNode}} props
 */
export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='w-full max-w-lg rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md dark:bg-black/20'>
        <div className='mb-3 flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>{title || 'Modal'}</h3>
          <button className='rounded px-2 py-1 text-sm hover:bg-slate-200/30' type='button' onClick={onClose}>
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
