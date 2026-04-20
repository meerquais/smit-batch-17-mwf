import { useState } from 'react';
import Modal from '../../../shared/components/Modal';
import { createReport } from '../services/reportService';

/**
 * @param {{open: boolean, onClose: () => void, reporterId: string, reportedUserId: string, postId?: string|null}} props
 */
export default function ReportModal({
  open,
  onClose,
  reporterId,
  reportedUserId,
  postId = null,
}) {
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!reason.trim()) return;
    try {
      setLoading(true);
      await createReport({ reporterId, reportedUserId, postId, reason: reason.trim() });
      setReason('');
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title='Report content'>
      <textarea
        value={reason}
        onChange={(event) => setReason(event.target.value)}
        className='w-full rounded-lg border border-slate-300 bg-transparent p-3 dark:border-slate-700'
        placeholder='Reason for reporting'
      />
      <button
        className='mt-3 rounded-lg bg-rose-500 px-4 py-2 text-sm text-white disabled:opacity-70'
        type='button'
        onClick={submit}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit report'}
      </button>
    </Modal>
  );
}
