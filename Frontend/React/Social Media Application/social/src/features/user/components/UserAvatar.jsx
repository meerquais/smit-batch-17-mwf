/**
 * @param {{displayName?: string, photoURL?: string, size?: 'sm'|'md'|'lg'}} props
 */
export default function UserAvatar({ displayName = 'User', photoURL, size = 'md' }) {
  const sizes = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-14 w-14 text-lg',
  };

  if (photoURL) {
    return <img src={photoURL} alt={displayName} className={`rounded-full object-cover ${sizes[size]}`} />;
  }

  return (
    <div className={`flex items-center justify-center rounded-full bg-slate-200 font-semibold dark:bg-slate-800 ${sizes[size]}`}>
      {displayName[0]?.toUpperCase() ?? 'U'}
    </div>
  );
}
