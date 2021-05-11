import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhfdeDCpZ_I39HiyD4B7-J4sk9J6oeBiU",
  authDomain: "ecommerce-26432.firebaseapp.com",
  projectId: "ecommerce-26432",
  storageBucket: "ecommerce-26432.appspot.com",
  messagingSenderId: "276162943465",
  appId: "1:276162943465:web:c9c65d77f0f15b35d11378",
  measurementId: "G-44TSVJYXEY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
