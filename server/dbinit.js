
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.APIK.toString(),
  authDomain: "recipeemanager.firebaseapp.com",
  databaseURL:
    "https://recipeemanager-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recipeemanager",
  storageBucket: "recipeemanager.firebasestorage.app",
  messagingSenderId: process.env.MSID.toString(),
  appId: process.env.AID.toString(),
  measurementId: process.env.MESUREID.toString(),
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);
console.log("connected");;