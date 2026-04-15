/**
 * @param {{posts: any[], onDelete: (postId: string) => Promise<void>}} props
 */
export default function PostTable({ posts, onDelete }) {
  return (
    <div className='overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800'>
      <table className='w-full min-w-[640px] text-left text-sm'>
        <thead className='bg-slate-100 dark:bg-slate-900'>
          <tr>
            <th className='p-3'>Post</th>
            <th className='p-3'>Author</th>
            <th className='p-3'>Visibility</th>
            <th className='p-3'>Likes</th>
            <th className='p-3'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className='border-t border-slate-200 dark:border-slate-800'>
              <td className='p-3'>{(post.content || '').slice(0, 60)}</td>
              <td className='p-3'>{post.displayName || post.userId}</td>
              <td className='p-3'>{post.visibility}</td>
              <td className='p-3'>{post.likesCount ?? 0}</td>
              <td className='p-3'>
                <button className='rounded bg-rose-500 px-2 py-1 text-xs text-white' type='button' onClick={() => onDelete(post.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
