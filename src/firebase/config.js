// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx3sfy_u-QFX-JrhkJQwwxbigwfN2EUcs",
  authDomain: "miniblog-15a7e.firebaseapp.com",
  projectId: "miniblog-15a7e",
  storageBucket: "miniblog-15a7e.appspot.com",
  messagingSenderId: "360497756280",
  appId: "1:360497756280:web:dbba72617399ab4ecc958d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
