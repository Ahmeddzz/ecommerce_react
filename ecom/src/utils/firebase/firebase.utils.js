// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore,
doc,
getDoc,
setDoc}
 from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyw6D6BNORKtHiItJqtD7ch0GNFh5QbLs",
  authDomain: "ecommerce-app-40f65.firebaseapp.com",
  projectId: "ecommerce-app-40f65",
  storageBucket: "ecommerce-app-40f65.appspot.com",
  messagingSenderId: "932045467970",
  appId: "1:932045467970:web:d0e3eea875b66e26f198db",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users',userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
console.log(userSnapShot.exists());

if(!userSnapShot.exists()){
  const { displayName, email} = userAuth;
  const createdAt = new Date();
    try{
      await setDoc(userDocRef, {displayName, email, createdAt})
    } catch (error){
      console.log('error creating the user', error.message);
    }
}


return userDocRef;

}


