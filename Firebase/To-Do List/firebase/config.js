// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAuth,
            GoogleAuthProvider, createUserWithEmailAndPassword,
            signInWithEmailAndPassword, signInWithPopup,
    sendPasswordResetEmail , onAuthStateChanged, signOut
   } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
  import { getFirestore, doc , 
    setDoc , getDoc , getDocs , addDoc , updateDoc ,
    deleteDoc , collection, query, where , orderBy ,
    serverTimestamp
   } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCwAZuAoHOQYqqnmk-F94cqLUoYv1B9KDA",
    authDomain: "to-do-3f167.firebaseapp.com",
    projectId: "to-do-3f167",
    storageBucket: "to-do-3f167.firebasestorage.app",
    messagingSenderId: "319665411968",
    appId: "1:319665411968:web:4c7ec34b998630a4235365"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const googleProvider = new GoogleAuthProvider();


  export { auth , db , googleProvider,
            GoogleAuthProvider, createUserWithEmailAndPassword,
            signInWithEmailAndPassword, signInWithPopup,
    sendPasswordResetEmail , onAuthStateChanged, signOut,
    doc , 
    setDoc , getDoc , getDocs , addDoc , updateDoc ,
    deleteDoc , collection, query, where , orderBy ,
    serverTimestamp


}