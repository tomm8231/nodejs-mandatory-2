import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "mandatory2-dc943.firebaseapp.com",
  projectId: "mandatory2-dc943",
  storageBucket: "mandatory2-dc943.appspot.com",
  messagingSenderId: "715183178622",
  appId: "1:715183178622:web:377009ead7d9606768a92f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }