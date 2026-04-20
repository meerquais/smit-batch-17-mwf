// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACytLeGL8geFevutXU6adZ2T1gc0VjvC4",
  authDomain: "e-com-b5a98.firebaseapp.com",
  projectId: "e-com-b5a98",
  storageBucket: "e-com-b5a98.firebasestorage.app",
  messagingSenderId: "751797701459",
  appId: "1:751797701459:web:cf62526a366537bdff2fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)