import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAaS-m48dnAeAR0aBgReyGaldnh-CZcQc",
  authDomain: "journalapp-7b92b.firebaseapp.com",
  projectId: "journalapp-7b92b",
  storageBucket: "journalapp-7b92b.appspot.com",
  messagingSenderId: "435313438397",
  appId: "1:435313438397:web:1d2c755540659958c6d1d4",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}