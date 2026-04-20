import { useSelector } from 'react-redux';
import Navbar from '../../../shared/components/Navbar';
import EditProfileForm from '../components/EditProfileForm';
import BlockList from '../components/BlockList';
import useUser from '../hooks/useUser';
import { unblockUser, updateProfile } from '../services/userService';

export default function SettingsPage() {
  const authUser = useSelector((state) => state.auth.user);
  const { user, loading, refetch } = useUser(authUser?.uid);

  if (loading) return <div className='p-4'>Loading settings...</div>;

  return (
    <>
      <Navbar />
      <main className='feed-shell space-y-4'>
        <EditProfileForm
          initialValues={user}
          onSubmit={async (values) => {
            await updateProfile(authUser.uid, {
              displayName: values.displayName,
              bio: values.bio ?? '',
              photoURL: values.avatar || null,
            });
            await refetch();
          }}
        />
        <BlockList blockedUsers={user?.blockedUsers ?? []} onUnblock={(targetUid) => unblockUser(authUser.uid, targetUid)} />
      </main>
    </>
  );
}
