import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../config/firebase';

export async function registerUser(email, password, displayName) {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName });
    await sendEmailVerification(credential.user);

    await setDoc(doc(db, 'users', credential.user.uid), {
      uid: credential.user.uid,
      email,
      displayName,
      photoURL: credential.user.photoURL ?? null,
      bio: '',
      role: 'user',
      isPrivate: false,
      isDisabled: false,
      isVerified: false,
      followers: [],
      following: [],
      blockedUsers: [],
      followRequests: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return {
      uid: credential.user.uid,
      email: credential.user.email,
      displayName: credential.user.displayName,
      role: 'user',
      photoURL: credential.user.photoURL,
      isVerified: false,
    };
  } catch (error) {
    throw new Error(error.message || 'Failed to register user');
  }
}

export async function loginUser(email, password) {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, 'users', credential.user.uid));
    const role = userDoc.exists() ? userDoc.data().role || 'user' : 'user';
    const profile = userDoc.exists() ? userDoc.data() : {};
    return {
      uid: credential.user.uid,
      email: credential.user.email,
      displayName: profile.displayName || credential.user.displayName,
      photoURL: profile.photoURL ?? credential.user.photoURL,
      role,
      isVerified: Boolean(profile.isVerified),
    };
  } catch (error) {
    throw new Error(error.message || 'Failed to login');
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message || 'Failed to logout');
  }
}

export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(error.message || 'Failed to send reset password email');
  }
}

export function onAuthStateChange(callback) {
  return onAuthStateChanged(auth, async (user) => {
    if (!user) {
      callback(null);
      return;
    }

    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const profile = userDoc.exists() ? userDoc.data() : {};
    const role = profile.role || 'user';

    callback({
      uid: user.uid,
      email: user.email,
      displayName: profile.displayName || user.displayName,
      photoURL: profile.photoURL ?? user.photoURL,
      role,
      isVerified: Boolean(profile.isVerified),
    });
  });
}
