// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUkCLM4pNzhBm0pTnqHjHzqU8PEsEFzyI",
  authDomain: "tech-geek-e7f20.firebaseapp.com",
  projectId: "tech-geek-e7f20",
  storageBucket: "tech-geek-e7f20.appspot.com",
  messagingSenderId: "924971035253",
  appId: "1:924971035253:web:6b82c80d5137043b85663c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default auth;