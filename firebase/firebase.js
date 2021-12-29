import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import firebaseConfig from "./config";
import { getFirestore, collection, addDoc } from "firebase/firestore";


class Firebase {
    constructor () {
        initializeApp(firebaseConfig);
        this.auth = getAuth()
        this.db = getFirestore();
        console.log('Auth: ', this.auth)
    }

    async confirmGuest (guest) {
        try {
            const docRef = await addDoc(collection(this.db, "guests"), guest);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

const firebase = new Firebase();
export default firebase;