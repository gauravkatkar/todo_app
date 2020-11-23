

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_CB6q4OQUbEbzX8YlWdxRactWT7TZGcM",
    authDomain: "todo-app-gk-85b5e.firebaseapp.com",
    databaseURL: "https://todo-app-gk-85b5e.firebaseio.com",
    projectId: "todo-app-gk-85b5e",
    storageBucket: "todo-app-gk-85b5e.appspot.com",
    messagingSenderId: "181269916619",
    appId: "1:181269916619:web:f463a999ada17a06b1244e",
    measurementId: "G-TY0Q6SXP7D"
  });

  const db = firebaseApp.firestore();

  export default db;