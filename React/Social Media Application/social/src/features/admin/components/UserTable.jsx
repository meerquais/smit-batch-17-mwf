/**
 * @param {{users: any[], onToggleDisabled: (user: any) => Promise<void>, onToggleVerified: (user: any) => Promise<void>}} props
 */
export default function UserTable({ users, onToggleDisabled, onToggleVerified }) {
  return (
    <div className='overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800'>
      <table className='w-full min-w-[640px] text-left text-sm'>
        <thead className='bg-slate-100 dark:bg-slate-900'>
          <tr>
            <th className='p-3'>Name</th>
            <th className='p-3'>Email</th>
            <th className='p-3'>Role</th>
            <th className='p-3'>Status</th>
            <th className='p-3'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className='border-t border-slate-200 dark:border-slate-800'>
              <td className='p-3'>{user.displayName}</td>
              <td className='p-3'>{user.email}</td>
              <td className='p-3'>{user.role}</td>
              <td className='p-3'>{user.isDisabled ? 'Disabled' : 'Enabled'}</td>
              <td className='p-3'>
                <div className='flex gap-2'>
                  <button className='rounded bg-slate-200 px-2 py-1 text-xs dark:bg-slate-700' type='button' onClick={() => onToggleDisabled(user)}>
                    {user.isDisabled ? 'Enable' : 'Disable'}
                  </button>
                  <button className='rounded bg-sky-500 px-2 py-1 text-xs text-white' type='button' onClick={() => onToggleVerified(user)}>
                    {user.isVerified ? 'Remove Tick' : 'Verify'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
