import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBmQ6qZFXJKBf-PoNQbCZyHxu3MozfFYB8",
    authDomain: "clase-frontend-6.firebaseapp.com",
    projectId: "clase-frontend-6",
    storageBucket: "clase-frontend-6.appspot.com",
    messagingSenderId: "847256451830",
    appId: "1:847256451830:web:b26dfd7e120465db97cad7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}