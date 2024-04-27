// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNVxu_j0rq8di1VW_dhPCJBln9c27_tYw",
  authDomain: "user-email-password-9d73c.firebaseapp.com",
  projectId: "user-email-password-9d73c",
  storageBucket: "user-email-password-9d73c.appspot.com",
  messagingSenderId: "272007581685",
  appId: "1:272007581685:web:0068b014eb41140f0e9abc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;