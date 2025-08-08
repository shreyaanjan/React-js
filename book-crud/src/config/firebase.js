import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSk_EGMEGFOcMhwtYpJwE8R0d-Ry7jXg4",
  authDomain: "book-crud-52fb8.firebaseapp.com",
  projectId: "book-crud-52fb8",
  storageBucket: "book-crud-52fb8.firebasestorage.app",
  messagingSenderId: "55302208594",
  appId: "1:55302208594:web:3733f7ca8729c0f634b38b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);