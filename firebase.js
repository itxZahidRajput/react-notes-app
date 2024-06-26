import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Enter your own Firebase credentials

// const firebaseConfig = {
//     apiKey: "********************",
//     authDomain: "********************",
//     projectId: "********************",
//     storageBucket: "********************",
//     messagingSenderId: "********************",
//     appId: "********************"
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")