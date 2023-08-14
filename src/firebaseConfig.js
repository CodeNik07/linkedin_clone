// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8KPoOXUBeUDAETibaIfN0tBlinMmIwz0",
    authDomain: "linkedin-clone-a7068.firebaseapp.com",
    projectId: "linkedin-clone-a7068",
    storageBucket: "linkedin-clone-a7068.appspot.com",
    messagingSenderId: "608956027233",
    appId: "1:608956027233:web:13274029e063544d3df520",
    measurementId: "G-0HRVYCDZKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);

export { auth, app, fireStore };
