import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_9z2kGW4kuEoMR02uszoGuoeQOzBM2bw",
  authDomain: "real-chat-ba342.firebaseapp.com",
  projectId: "real-chat-ba342",
  storageBucket: "real-chat-ba342.appspot.com",
  messagingSenderId: "375998302417",
  appId: "1:375998302417:web:bb722abc8fd4a0bb5eddf0",
  measurementId: "G-8K0JD6NM9F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
