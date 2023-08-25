import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDDewkDMNGSZjsXKl_aoq-MydXzDWpaQ-U",
  authDomain: "elibrary-86f57.firebaseapp.com",
  projectId: "elibrary-86f57",
  storageBucket: "elibrary-86f57.appspot.com",
  messagingSenderId: "429515874748",
  appId: "1:429515874748:web:af10b8a64f969e56048bb9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
