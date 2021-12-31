import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import firebaseConfig from "./config";
import { getFirestore, collection, addDoc  } from "firebase/firestore";


class Firebase {
    constructor () {
        initializeApp(firebaseConfig);
        this.auth = getAuth()
        this.db = getFirestore();
        this.collection = 'guests'
    }

    async confirmGuest (guest) {
        try {
            return await addDoc(collection(this.db, this.collection), {...guest, created: Date.now()});
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

const firebase = new Firebase();
export default firebase;