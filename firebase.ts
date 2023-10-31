import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZemxeLXcGIA9ydW59S4wVzh8KTnp6rrI",
  authDomain: "chat-c6fef.firebaseapp.com",
  projectId: "chat-c6fef",
  storageBucket: "chat-c6fef.appspot.com",
  messagingSenderId: "88441691517",
  appId: "1:88441691517:web:077ba40909e20576c20014",
  measurementId: "G-CZZG0W4SDF",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
