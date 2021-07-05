// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from 'firebase';
  
  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBlhfYdbtegQCj2CUCqpQmnxhe1RInK8m8",
    authDomain: "codeblogs-16add.firebaseapp.com",
    projectId: "codeblogs-16add",
    storageBucket: "codeblogs-16add.appspot.com",
    messagingSenderId: "586630387833",
    appId: "1:586630387833:web:6cec02ac2701d916869ca8",
    measurementId: "G-RJ93KGFCD7"

  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { db, auth, storage }