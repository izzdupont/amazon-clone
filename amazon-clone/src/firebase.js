// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrcMVkg7gyaK3h6YA_ifvzqYw1guSpK_w",
    authDomain: "clone-9f186.firebaseapp.com",
    projectId: "clone-9f186",
    storageBucket: "clone-9f186.appspot.com",
    messagingSenderId: "1007227460679",
    appId: "1:1007227460679:web:18cdbbacff47e681186562",
    measurementId: "G-M7E5KCKC53"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  
  export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };