// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZPkv7GGNxII5mPJ4aOpmaxjDkeZmklCE",
  authDomain: "smart-deal-ee1ad.firebaseapp.com",
  projectId: "smart-deal-ee1ad",
  storageBucket: "smart-deal-ee1ad.firebasestorage.app",
  messagingSenderId: "565583916923",
  appId: "1:565583916923:web:04e9a86e95365dace217de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
