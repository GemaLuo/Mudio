// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLvabrHLUtJ_B1mi8--5SkKKrD9E5kbXE",
  authDomain: "mudio-enjoy-music.firebaseapp.com",
  projectId: "mudio-enjoy-music",
  storageBucket: "mudio-enjoy-music.appspot.com",
  messagingSenderId: "1021711652283",
  appId: "1:1021711652283:web:27ad8d914016f5718a209e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;
