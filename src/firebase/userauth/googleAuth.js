import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore"
import { auth, db, detectUser } from './auth';


const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      detectUser()
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};