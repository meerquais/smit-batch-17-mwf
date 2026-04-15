import FollowButton from '../../follow/components/FollowButton';
import UserAvatar from './UserAvatar';

/**
 * @param {{profile: any, isOwnProfile: boolean, isFollowing: boolean, pendingRequest?: boolean, onFollow: () => Promise<void>, onUnfollow: () => Promise<void>, onBlock: () => Promise<void>, onEditProfile?: () => void}} props
 */
export default function ProfileCard({
  profile,
  isOwnProfile,
  isFollowing,
  pendingRequest = false,
  onFollow,
  onUnfollow,
  onBlock,
  onEditProfile,
}) {
  if (!profile) return null;

  return (
    <section className='rounded-2xl border border-slate-200 p-5 dark:border-slate-800'>
      <div className='flex items-center gap-4'>
        <UserAvatar size='lg' displayName={profile.displayName} photoURL={profile.photoURL} />
        <div>
          <h1 className='text-lg font-semibold'>
            {profile.displayName}
            {profile.isVerified && <span className='ml-2 text-sky-500'>✓</span>}
          </h1>
          <p className='text-sm text-slate-500'>{profile.bio || 'No bio yet.'}</p>
        </div>
      </div>
      <div className='mt-4 flex gap-4 text-sm'>
        <span>Followers: {profile.followers?.length ?? 0}</span>
        <span>Following: {profile.following?.length ?? 0}</span>
      </div>
      <div className='mt-4 flex gap-2'>
        {isOwnProfile ? (
          <button
            className='rounded-lg border border-slate-300 px-4 py-2 text-sm dark:border-slate-700'
            type='button'
            onClick={onEditProfile}
          >
            Edit profile
          </button>
        ) : (
          <>
            <FollowButton isFollowing={isFollowing} pending={pendingRequest} onFollow={onFollow} onUnfollow={onUnfollow} />
            <button className='rounded-lg bg-rose-500 px-4 py-2 text-sm text-white' onClick={onBlock} type='button'>
              Block
            </button>
          </>
        )}
      </div>
    </section>
  );
}
