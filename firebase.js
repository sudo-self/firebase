// index.js

import firebaseConfig from './firebase.js';
import firebase from 'firebase/app';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAgLvjnRHIGaPbCBOCwdlnSbwUL3AO3to",
  authDomain: "ilostmyipad.firebaseapp.com",
  databaseURL: "https://ilostmyipad-default-rtdb.firebaseio.com",
  projectId: "ilostmyipad",
  storageBucket: "ilostmyipad.appspot.com",
  messagingSenderId: "1096571522428",
  appId: "1:1096571522428:web:2b2711712df8a6d46928f9"
};

export default firebaseConfig;
