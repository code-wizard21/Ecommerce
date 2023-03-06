import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { app } from '..'


export const auth = getAuth(app)
export const db = getFirestore(app)