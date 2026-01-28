// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getFirestore , doc , setDoc , addDoc , collection,

    getDoc , getDocs , updateDoc , deleteDoc , onSnapshot

   } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDsNYUgb_TuNT7F87syyAH-Am-1G1kZobo",
    authDomain: "fir-class-fe2c6.firebaseapp.com",
    projectId: "fir-class-fe2c6",
    storageBucket: "fir-class-fe2c6.firebasestorage.app",
    messagingSenderId: "828276511141",
    appId: "1:828276511141:web:4051794cf7698dc161584c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db , doc , setDoc,
    addDoc , collection, getDoc , getDocs , updateDoc , deleteDoc
    ,onSnapshot
  }