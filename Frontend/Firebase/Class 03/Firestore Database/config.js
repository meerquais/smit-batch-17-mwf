 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getFirestore , doc , setDoc , collection , addDoc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAXQZO-TNG2Y24-O9PZqTDdhqalXThHGYM",
    authDomain: "class-firebase-demo-ef556.firebaseapp.com",
    projectId: "class-firebase-demo-ef556",
    storageBucket: "class-firebase-demo-ef556.firebasestorage.app",
    messagingSenderId: "53121313859",
    appId: "1:53121313859:web:19d47b70efb0bffa51f8f6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export {db , doc , setDoc ,collection , addDoc};  