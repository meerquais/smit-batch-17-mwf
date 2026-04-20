// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAuth,
     createUserWithEmailAndPassword ,
      signInWithEmailAndPassword,
        signOut 
    } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCKa_otHwCqwhFC1mj3ihXgP_3JgZaiG94",
    authDomain: "fir-class-1-419cf.firebaseapp.com",
    projectId: "fir-class-1-419cf",
    storageBucket: "fir-class-1-419cf.firebasestorage.app",
    messagingSenderId: "19300242144",
    appId: "1:19300242144:web:ea9f13e45bfab5a7923685"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)


  export {auth ,
     createUserWithEmailAndPassword ,
      signInWithEmailAndPassword,
    signOut ,}