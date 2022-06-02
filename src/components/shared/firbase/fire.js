import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDMq3A7By9ta-qqbzvEO_4NlarfGzdZKDY",
  authDomain: "chat-c5b5c.firebaseapp.com",
  projectId: "chat-c5b5c",
  storageBucket: "chat-c5b5c.appspot.com",
  messagingSenderId: "950527293092",
  appId: "1:950527293092:web:bb6b17e9aabdaeeb31d831",
  databaseURL: "https://chat-c5b5c-default-rtdb.firebaseio.com/",
};

const db = firebase.initializeApp(firebaseConfig);

export default db;
