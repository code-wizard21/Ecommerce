import { signInWithEmailAndPassword } from "firebase/auth";
import {
    query,
    getDocs,
    collection,
    where
} from "firebase/firestore"
import { auth, db, detectUser } from './auth';

//Email and password login
export const logInWithEmailAndPassword = async (email, password) => {
    const q = query(collection(db, "users"), where("email", "==", email));
    const docs = await getDocs(q);
    if (docs.docs.length !== 0) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            detectUser()
        } catch (err) {
            alert(err.message);
            console.error(err);
        }
    }
    else {
        console.log("Email or Password not registered")
    }
};