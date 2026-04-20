import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../../shared/components/Navbar';
import ProfileCard from '../components/ProfileCard';
import useUser from '../hooks/useUser';
import { blockUser } from '../../follow/services/followService';
import { followUser, unfollowUser } from '../../follow/services/followService';

export default function ProfilePage() {
  const { uid } = useParams();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.auth.user);
  const { user, loading } = useUser(uid);

  if (loading) return <div className='p-4'>Loading profile...</div>;
  if (!user) return <div className='p-4'>User not found.</div>;

  const isOwnProfile = authUser?.uid === uid;
  const isFollowing = user.followers?.includes(authUser?.uid);
  const pendingRequest = Boolean(user.followRequests?.includes(authUser?.uid));

  return (
    <>
      <Navbar />
      <main className='feed-shell'>
        <ProfileCard
          profile={user}
          isOwnProfile={isOwnProfile}
          isFollowing={Boolean(isFollowing)}
          pendingRequest={pendingRequest}
          onFollow={() => followUser(authUser.uid, uid)}
          onUnfollow={() => unfollowUser(authUser.uid, uid)}
          onBlock={() => blockUser(authUser.uid, uid)}
          onEditProfile={() => navigate('/settings')}
        />
      </main>
    </>
  );
}
