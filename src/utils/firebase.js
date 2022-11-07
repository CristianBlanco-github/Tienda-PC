// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBisz_VjoRul1akFLLK0MFCS_Sb4SC9ho8",
  authDomain: "cristian-blanco-tienda-pc.firebaseapp.com",
  projectId: "cristian-blanco-tienda-pc",
  storageBucket: "cristian-blanco-tienda-pc.appspot.com",
  messagingSenderId: "679185555248",
  appId: "1:679185555248:web:de80b5afea63e3cf4df2f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//crear una istancia de la base de datos
export const tf=getFirestore(app);