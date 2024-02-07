import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-47fb5.firebaseapp.com",
  projectId: "mern-estate-47fb5",
  storageBucket: "mern-estate-47fb5.appspot.com",
  messagingSenderId: "100034825783",
  appId: "1:100034825783:web:515a65f80c357ea78379b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);