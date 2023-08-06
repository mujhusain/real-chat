import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA7vPLNHDZ6OBRXIHeaQJ0SlWkbXT8dT_E",
  authDomain: "real-chat-f9aae.firebaseapp.com",
  projectId: "real-chat-f9aae",
  storageBucket: "real-chat-f9aae.appspot.com",
  messagingSenderId: "895928264670",
  appId: "1:895928264670:web:b49f2b6b7a7d63ca4c1f4f",
  measurementId: "G-D7PB2GCQFV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
