// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl_PMesLgsj0dyJgn02xTbrCoM3edQx80",
  authDomain: "star-app-c772b.firebaseapp.com",
  projectId: "star-app-c772b",
  storageBucket: "star-app-c772b.firebasestorage.app",
  messagingSenderId: "318197762056",
  appId: "1:318197762056:web:e4e298f61e4cd079fee9bd",
  measurementId: "G-Q6HRJ2SYLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
