import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAggqXcNxR71oPJY9gZzdoj9QPFUG9zLtM",
  authDomain: "snapchatcl333.firebaseapp.com",
  projectId: "snapchatcl333",
  storageBucket: "snapchatcl333.appspot.com",
  messagingSenderId: "208960844225",
  appId: "1:208960844225:web:b1097f25d2052133333f40",
  measurementId: "G-J7CCXV6VCS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
