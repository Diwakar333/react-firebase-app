// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3GD_iQA0jaPsfgyhyec5EaDLUn-KWm84",
  authDomain: "firestock-93a98.firebaseapp.com",
  projectId: "firestock-93a98",
  storageBucket: "firestock-93a98.appspot.com",
  messagingSenderId: "889085309677",
  appId: "1:889085309677:web:9e025dd5b9df840d1c52e4"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


