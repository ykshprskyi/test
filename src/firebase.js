import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// const API_KEY = import.meta.VITE_API_KEY;
const firebaseConfig = {
  apiKey: "AIzaSyDiFDOQIY9JBhcuYECD16LlYA_GByCGTlk",
  authDomain: "test-task-d58a6.firebaseapp.com",
  projectId: "test-task-d58a6",
  storageBucket: "test-task-d58a6.appspot.com",
  messagingSenderId: "671351839176",
  appId: "1:671351839176:web:be4e81643361711c6788fd",
  measurementId: "G-TCQTCCD3V1",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const myGoogleAuthProvider = new GoogleAuthProvider();
