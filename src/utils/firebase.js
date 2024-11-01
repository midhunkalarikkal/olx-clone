// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC68wP1DKgTeOMpqw8CI85wy1s1hehfFNI",
  authDomain: "olx-clone-5630e.firebaseapp.com",
  projectId: "olx-clone-5630e",
  storageBucket: "olx-clone-5630e.firebasestorage.app",
  messagingSenderId: "1091902646970",
  appId: "1:1091902646970:web:cd3c07c868264da9073083",
  measurementId: "G-G11LDW7CTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
