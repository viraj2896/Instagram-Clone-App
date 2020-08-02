import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVjY3XfgIww1Y9onBXV_E_C9Uaicrxjlw",
    authDomain: "instagram-clone-fadf1.firebaseapp.com",
    databaseURL: "https://instagram-clone-fadf1.firebaseio.com",
    projectId: "instagram-clone-fadf1",
    storageBucket: "instagram-clone-fadf1.appspot.com",
    messagingSenderId: "150922476813",
    appId: "1:150922476813:web:f411a36d14f846dc034444",
    measurementId: "G-16TYRCTR28"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

  