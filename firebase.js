// index.js

import firebaseConfig from './firebase.js';
import firebase from 'firebase/app';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF5YRke_9RzuQOONX1vFB05xH8PngENqc",
  authDomain: "svelte-forever.firebaseapp.com",
  databaseURL: "https://svelte-forever-default-rtdb.firebaseio.com",
  projectId: "svelte-forever",
  storageBucket: "svelte-forever.appspot.com",
  messagingSenderId: "226934196830",
  appId: "1:226934196830:web:b6b49ea005be128a26c2cf",
  measurementId: "G-Y492VJ0ZMC"
};
