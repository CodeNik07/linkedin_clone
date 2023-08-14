import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const LoginAPI = (email, password) => {
    try {
        let responce = signInWithEmailAndPassword(auth, email, password);
        return responce
    } catch (err) {
        return err;
    }

};

export const RegisterAPI = (email, password) => {
    try {
        let responce = createUserWithEmailAndPassword(auth, email, password);
        return responce;
    } catch (err) {
        return err;
    }

};

export const GoogleSignInAPI = () => {
    try {
        let googleProvider = new GoogleAuthProvider();
        let res = signInWithPopup(auth, googleProvider);
        return res;
    } catch (err) {
        return err;
    }

};


export const onLogout = () => {
    try {
        signOut(auth);
        return true;
    } catch(err) {
        console.log(err);
    }
};
