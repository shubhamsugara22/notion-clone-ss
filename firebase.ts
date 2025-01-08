// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: <key></key>,
  authDomain: "notion-clone-4517d.firebaseapp.com",
  projectId: "notion-clone-4517d",
  storageBucket: "notion-clone-4517d.firebasestorage.app",
  messagingSenderId: "970779125375",
  appId: "1:970779125375:web:4b482c10af052beea7814a",
  measurementId: "G-5XDFLN0TNM"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) :getApp();
const db = getFireStore(app);

export { db };