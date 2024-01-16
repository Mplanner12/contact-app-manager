// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-snssaNlPqO0mB0xPtpX29ekQftrBebo",
  authDomain: "contact-page-d9524.firebaseapp.com",
  projectId: "contact-page-d9524",
  storageBucket: "contact-page-d9524.appspot.com",
  messagingSenderId: "1022874454314",
  appId: "1:1022874454314:web:cff6ed743bf1be7d0f3653",
  measurementId: "G-ELFEHRBSG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
