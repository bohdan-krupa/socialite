import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCRAqgIiQJ-ja-rsvHP-X-Qy39s32_d2yk",
  authDomain: "socialite-x.firebaseapp.com",
  databaseURL: "https://socialite-x.firebaseio.com",
  projectId: "socialite-x",
  storageBucket: "",
  messagingSenderId: "186476349671",
  appId: "1:186476349671:web:2ad656a0d959e725"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}