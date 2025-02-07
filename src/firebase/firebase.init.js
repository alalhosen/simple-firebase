// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//DANGER : do not share config publicly

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpWCIGUpSydyoX57fGtAZ1gg9AFqLZOKo",
  authDomain: "simple-firebase2-23c59.firebaseapp.com",
  projectId: "simple-firebase2-23c59",
  storageBucket: "simple-firebase2-23c59.firebasestorage.app",
  messagingSenderId: "184419100232",
  appId: "1:184419100232:web:7865b98aed8fd0ead45a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);