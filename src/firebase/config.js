import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC0K8NdzuGIhnY3QHMUZX4OZe7cg8rdJwg",
    authDomain: "mynaira-cb082.firebaseapp.com",
    projectId: "mynaira-cb082",
    storageBucket: "mynaira-cb082.appspot.com",
    messagingSenderId: "112535419293",
    appId: "1:112535419293:web:02191b53e1bd925e40d774"
  };

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }