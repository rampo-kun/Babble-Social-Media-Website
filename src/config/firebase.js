import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBdff8zduV6RvKoNc3aZ-9_wjchAzszZZI",
  authDomain: "babbleapp-8858a.firebaseapp.com",
  projectId: "babbleapp-8858a",
  storageBucket: "babbleapp-8858a.appspot.com",
  messagingSenderId: "561506379956",
  appId: "1:561506379956:web:f6d1e1b8793935be1ccfe1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);