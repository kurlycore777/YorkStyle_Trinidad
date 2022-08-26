// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ1svtUC937CxzQbK9tN37tUuKwlM04Mw",
    authDomain: "yorkstyle-2ac90.firebaseapp.com",
    projectId: "yorkstyle-2ac90",
    storageBucket: "yorkstyle-2ac90.appspot.com",
    messagingSenderId: "630887251314",
    appId: "1:630887251314:web:5a936589cd2282c5d2f1eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)