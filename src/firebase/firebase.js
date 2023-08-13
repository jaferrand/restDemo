// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz0qxcbimoVt7eaQ6WY7lo95P7Ue03bmE",
  authDomain: "rest-p4.firebaseapp.com",
  projectId: "rest-p4",
  storageBucket: "rest-p4.appspot.com",
  messagingSenderId: "30274082879",
  appId: "1:30274082879:web:66c64332ac66220d32408a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db= app.firestore()