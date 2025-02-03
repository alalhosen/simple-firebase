// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPBfX1yvDDRjaKKrUYlnqUIYSu0eCfAtY",
  authDomain: "simple-firebase-dc088.firebaseapp.com",
  projectId: "simple-firebase-dc088",
  storageBucket: "simple-firebase-dc088.firebasestorage.app",
  messagingSenderId: "214459143891",
  appId: "1:214459143891:web:e29c3d0975a2fef4a7a626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;