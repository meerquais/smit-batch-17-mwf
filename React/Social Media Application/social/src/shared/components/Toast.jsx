/**
 * @param {{message: string, type?: 'success'|'error'|'info'}} props
 */
export default function Toast({ message, type = 'info' }) {
  if (!message) return null;

  const tones = {
    success: 'bg-emerald-500',
    error: 'bg-rose-500',
    info: 'bg-slate-900 dark:bg-slate-100 dark:text-slate-900',
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 rounded-lg px-4 py-2 text-sm text-white shadow-lg ${tones[type]}`}>
      {message}
    </div>
  );
}
