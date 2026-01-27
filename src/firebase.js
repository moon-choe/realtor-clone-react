// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA3XFusYNxoyERQPJUqdBYqVn8NPNBrrg",
  authDomain: "realtor-clone-react-21b12.firebaseapp.com",
  projectId: "realtor-clone-react-21b12",
  storageBucket: "realtor-clone-react-21b12.firebasestorage.app",
  messagingSenderId: "176669028493",
  appId: "1:176669028493:web:8f258eab310ae9cfb032c4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()