import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './auth';

//Email and password login
export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } 
    catch (err) {
        alert(err.message);
        console.error(err);
    }
};