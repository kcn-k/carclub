import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3MPhwwIFQrcMUeexXMA9cxT5xeA0PEBk",
  authDomain: "carclub-e5d43.firebaseapp.com",
  projectId: "carclub-e5d43",
  storageBucket: "carclub-e5d43.appspot.com",
  messagingSenderId: "895558827035",
  appId: "1:895558827035:web:0a3ca14ed9ba4c39204cbe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
