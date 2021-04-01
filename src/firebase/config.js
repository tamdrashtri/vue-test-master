import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0n5tTxB1oPnJghXJSu03kCsH36kCq3w0",
  authDomain: "aikon-e1ba6.firebaseapp.com",
  projectId: "aikon-e1ba6",
  storageBucket: "aikon-e1ba6.appspot.com",
  messagingSenderId: "283145900428",
  appId: "1:283145900428:web:662ea099761b4e244a06a9",
  measurementId: "G-50JY4810PF"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const firebaseAuth = firebase.auth();
const projectAuth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseConfig,projectFirestore, projectAuth, timestamp, firebaseAuth, provider };
