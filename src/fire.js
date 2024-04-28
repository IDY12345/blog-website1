// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe4wDZQUIcNE4P5WkkXFpV2c-3ZXF63Xs",
  authDomain: "blogproject-4d9cb.firebaseapp.com",
  projectId: "blogproject-4d9cb",
  storageBucket: "blogproject-4d9cb.appspot.com",
  messagingSenderId: "822457513472",
  appId: "1:822457513472:web:a3fee830d033cfd4238ae5",
  measurementId: "G-VK4CFHSG4T"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const auth = getAuth(app);
export const provider=new GoogleAuthProvider();