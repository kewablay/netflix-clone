import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMLAZxK-Zirbb1usWdbPXHdmN2dAFAkvU",
  authDomain: "netflix-clone-2b474.firebaseapp.com",
  projectId: "netflix-clone-2b474",
  storageBucket: "netflix-clone-2b474.appspot.com",
  messagingSenderId: "346615378563",
  appId: "1:346615378563:web:6c04a31cd7936e895a61b6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { auth };
export default db;
