import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDX8OvrKh8-dAeY7A_8kmQywzVjy9_ZTkw",
    authDomain: "exemplo-cs.firebaseapp.com",
    projectId: "exemplo-cs",
    storageBucket: "exemplo-cs.appspot.com",
    messagingSenderId: "101688994995",
    appId: "1:101688994995:web:1b454843b1eea56b0f14c6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;