// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxoehTGQeoc6fyPFCQRIw5tIvFerhWz7M",
  authDomain: "music-develop.firebaseapp.com",
  projectId: "music-develop",
  storageBucket: "music-develop.appspot.com",
  messagingSenderId: "78212997736",
  appId: "1:78212997736:web:ba8069c0e42edcd79f51dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app