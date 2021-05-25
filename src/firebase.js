import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBtgIoDp83xqIIK6ENaxSdY1n2i7unaYiE",
    authDomain: "react-project-ott.firebaseapp.com",
    projectId: "react-project-ott",
    storageBucket: "react-project-ott.appspot.com",
    messagingSenderId: "376394388504",
    appId: "1:376394388504:web:52c061dd4ddbc8c06c9f6d"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth , provider, storage};
export default db;