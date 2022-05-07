// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE_l9kYP2jYhDkRW-gcda-_EdwcJWjcns",
  authDomain: "blogging-d695b.firebaseapp.com",
  projectId: "blogging-d695b",
  storageBucket: "blogging-d695b.appspot.com",
  messagingSenderId: "1023020131789",
  appId: "1:1023020131789:web:a06a181832f4a10e82d084",
  measurementId: "G-LRQX60M5FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);