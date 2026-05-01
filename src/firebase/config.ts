import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDMkgubFQ7JkTR9-TSWy-dXu2R9eFfYEk",
  authDomain: "kiddoo-0551.firebaseapp.com",
  projectId: "kiddoo-0551",
  storageBucket: "kiddoo-0551.firebasestorage.app",
  messagingSenderId: "325747061629",
  appId: "1:325747061629:web:98990a5ee753b531abd214",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
