import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB3bIOoZC8GmVYrZOkaGRQdCNrz43eVJdU",
    authDomain: "bos-unlimited.firebaseapp.com",
    projectId: "bos-unlimited",
    storagBucket: "bos-unlimited.appspot.com",
    messagingSenderId: "494221854422",
    appId: "1:494221854422:web:1f97025a1a13c2544aab77"
}

//initialie firebase
export const app = initializeApp(firebaseConfig)
