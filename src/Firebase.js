// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { useEffect } from "react";
import { useState } from "react";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyC-eSzUde9ktN806Pwv_dNFNcMNbJRsbSo",
  authDomain: "bloggerbob-d744e.firebaseapp.com",
  projectId: "bloggerbob-d744e",
  storageBucket: "bloggerbob-d744e.appspot.com",
  messagingSenderId: "782939281491",
  appId: "1:782939281491:web:92f3cbe7394c9e54a9cea6",
  measurementId: "G-0NL2KBFEG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth();

export default function signup (email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}

export const useAuth =()=>{
    const [currentUser,setCurrentUser] = useState()
    useEffect(()=>
        {
            const unSub = onAuthStateChanged(auth, user=>setCurrentUser(user))
            return unSub
        },[])
        return currentUser
}

