import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { app } from '..'


export const auth = getAuth(app)
export const db = getFirestore(app)



//detect auth state
export const detectUser = onAuthStateChanged(auth, user => {
    if(user !== null) {
        console.log(user, "logged in!");
    }
    else {
        console.log("No user")
    }
});