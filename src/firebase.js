import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRWNBblGfG2f82_cQIc7b621U3HbC7kMY",
  authDomain: "disney-plus-clone-b3f92.firebaseapp.com",
  projectId: "disney-plus-clone-b3f92",
  storageBucket: "disney-plus-clone-b3f92.appspot.com",
  messagingSenderId: "545711374827",
  appId: "1:545711374827:web:b126c2221998a7f44619ae",
  measurementId: "G-ERFMEMRXB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//init services

const db = getFirestore();

export default getFirestore();
