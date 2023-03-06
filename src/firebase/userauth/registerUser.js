import { createUserWithEmailAndPassword } from "firebase/auth"; 
import {
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore"
import { auth, db } from './auth';

export const registerWithEmailAndPassword = async (name, email, password) => {
    const q = query(collection(db, "users"), where("email", "==", email));
    const docs = await getDocs(q);
    console.log(email)
    if (docs.docs.length === 0) {
        console.log("checked")
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name,
                authProvider: "local",
                email,
            });
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }
    else {
        console.log("Email already exist in database")
    }
};