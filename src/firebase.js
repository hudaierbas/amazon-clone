import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWo5JJ9ydHnbwCtwEwAQxPl_rYRKM8-sQ",
  authDomain: "clone-5ac2a.firebaseapp.com",
  databaseURL: "https://clone-5ac2a.firebaseio.com",
  projectId: "clone-5ac2a",
  storageBucket: "clone-5ac2a.appspot.com",
  messagingSenderId: "23504201117",
  appId: "1:23504201117:web:170a162e9cb0ded4813b74",
  measurementId: "G-RS6BBV0VV9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
