import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD7li45Xtmg4YMYNwU_fXqcJ3MrSmQKMG4",
    authDomain: "slack-clone-ab88c.firebaseapp.com",
    projectId: "slack-clone-ab88c",
    storageBucket: "slack-clone-ab88c.appspot.com",
    messagingSenderId: "103567618480",
    appId: "1:103567618480:web:ff3370874db019d20d2675"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;

  