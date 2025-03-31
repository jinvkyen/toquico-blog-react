import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAzKlJr-wKEaFYdw-fFDVYqRPXuTExeNog",
  authDomain: "toqui-co.firebaseapp.com",
  projectId: "toqui-co",
  storageBucket: "toqui-co.firebasestorage.app",
  messagingSenderId: "280863910283",
  appId: "1:280863910283:web:0b44903b83da13a39e678e",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);


// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider).then((result) => {
        user = result.user;
    }).catch((error)=>{
        console.error(error);
    })
    return user;
}