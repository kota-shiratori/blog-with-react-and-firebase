import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhGT_DxEXL-vucWHC-yFWgXCSc8Rhh_aI",
  authDomain: "blog-1e13b.firebaseapp.com",
  projectId: "blog-1e13b",
  storageBucket: "blog-1e13b.appspot.com",
  messagingSenderId: "266650617162",
  appId: "1:266650617162:web:40afa8e74c909cd24badb3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
