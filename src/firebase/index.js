import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3bIOoZC8GmVYrZOkaGRQdCNrz43eVJdU",
    authDomain: "bos-unlimited.firebaseapp.com",
    projectId: "bos-unlimited",
    storagBucket: "bos-unlimited.appspot.com",
    messagingSenderId: "494221854422",
    appId: "1:494221854422:web:1f97025a1a13c2544aab77"
}

//initialie firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth(app);

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email,
        });
        return user
    } 
    catch (error) {
        return {error: error.message}
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        return user
    } 
    catch (error) {
        return {error: error.message}
    }
}

export const logOut = async() => {
    try {
        await signOut(auth)
        return true
    } 
    catch (error) {
        return false
    }
};
