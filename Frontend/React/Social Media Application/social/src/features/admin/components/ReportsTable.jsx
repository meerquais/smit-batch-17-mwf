import { useState } from 'react';

/**
 * @param {{reports: any[], onUpdate: (reportId: string, status: string, note: string) => Promise<void>}} props
 */
export default function ReportsTable({ reports, onUpdate }) {
  const [notes, setNotes] = useState({});

  return (
    <div className='overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800'>
      <table className='w-full min-w-[780px] text-left text-sm'>
        <thead className='bg-slate-100 dark:bg-slate-900'>
          <tr>
            <th className='p-3'>Reporter</th>
            <th className='p-3'>Reported user</th>
            <th className='p-3'>Reason</th>
            <th className='p-3'>Status</th>
            <th className='p-3'>Admin note</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className='border-t border-slate-200 dark:border-slate-800'>
              <td className='p-3'>{report.reporterId}</td>
              <td className='p-3'>{report.reportedUserId}</td>
              <td className='p-3'>{report.reason}</td>
              <td className='p-3'>
                <select
                  className='rounded border border-slate-300 bg-transparent px-2 py-1 dark:border-slate-700'
                  value={report.status}
                  onChange={(event) => onUpdate(report.id, event.target.value, notes[report.id] || report.adminNote || '')}
                >
                  <option value='pending'>pending</option>
                  <option value='reviewed'>reviewed</option>
                  <option value='resolved'>resolved</option>
                </select>
              </td>
              <td className='p-3'>
                <input
                  className='w-full rounded border border-slate-300 bg-transparent px-2 py-1 dark:border-slate-700'
                  value={notes[report.id] ?? report.adminNote ?? ''}
                  onChange={(event) => setNotes((prev) => ({ ...prev, [report.id]: event.target.value }))}
                  onBlur={() => onUpdate(report.id, report.status, notes[report.id] ?? report.adminNote ?? '')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
