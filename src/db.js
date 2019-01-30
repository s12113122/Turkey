// import firebase from 'firebase/app'
// import 'firebase/firestore'
import firebase from 'firebase'
// Initialize your firebase app
firebase.initializeApp({
  apiKey: "AIzaSyCt0FwO1sqdRJZFj7mOG6fYdIbk0Ah1oYY",
  authDomain: "turkey-84b12.firebaseapp.com",
  databaseURL: "https://turkey-84b12.firebaseio.com",
  projectId: "turkey-84b12",
  storageBucket: "",
  messagingSenderId: "988778393768"
})
// firebase.firestore().settings({ timestampsInSnapshots: true })

export const db = firebase.database()