// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIFLMsCtRGvNXUfSVGNaNXX8bcaLF18XI",
  authDomain: "cprg306-assignments-47232.firebaseapp.com",
  projectId: "cprg306-assignments-47232",
  storageBucket: "cprg306-assignments-47232.firebasestorage.app",
  messagingSenderId: "225529446665",
  appId: "1:225529446665:web:a2d5bad7c1a8a8f11113d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);