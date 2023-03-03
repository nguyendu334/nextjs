// Import the functions you need from the SDKs you need
import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDbpCKs8y5e2q7rwG_OjW1o1ZyjwqFXlzo',
    authDomain: 'whatsapp-clone-cb204.firebaseapp.com',
    projectId: 'whatsapp-clone-cb204',
    storageBucket: 'whatsapp-clone-cb204.appspot.com',
    messagingSenderId: '287263831124',
    appId: '1:287263831124:web:6cf0ebd36a2cdb9df1a9c1',
    measurementId: 'G-KBSTG6QS8L',
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider };
