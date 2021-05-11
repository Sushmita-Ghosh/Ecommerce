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

// for sign in using normal method
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // the below is the user refernce
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // to get the documents related to the collection users
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // if the snapshot object doesnot exist create the user
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
