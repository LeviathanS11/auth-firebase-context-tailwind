// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCclQ2RcTz5DBzQCqzrYhZe8RcrlKQfGGQ",
  authDomain: "auth-firebase-context-ta-7ce1b.firebaseapp.com",
  projectId: "auth-firebase-context-ta-7ce1b",
  storageBucket: "auth-firebase-context-ta-7ce1b.appspot.com",
  messagingSenderId: "212243868907",
  appId: "1:212243868907:web:b92019d1abb798801822ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;