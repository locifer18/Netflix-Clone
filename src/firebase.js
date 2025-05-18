// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // Need initializeApp from firebase/app
import { getFirestore } from 'firebase/firestore'; // Need getFirestore from firebase/firestore
import { getAuth } from 'firebase/auth';         // Need getAuth from firebase/auth
// You also might need other imports for other services you use later!

const firebaseConfig = {
  apiKey: "AIzaSyCILpOoKz5VFzW5bDY6QX-ObAPdqjE3aBU",
  authDomain: "netflix-clone-a2674.firebaseapp.com",
  projectId: "netflix-clone-a2674",
  storageBucket: "netflix-clone-a2674.firebasestorage.app",
  messagingSenderId: "306624942820",
  appId: "1:306624942820:web:998d65f7cea3fca1f5d2f1",
  measurementId: "G-84MKH9D77Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); // Use the imported initializeApp function

// Get references to the services you need
const db = getFirestore(firebaseApp); // Use getFirestore and pass the app instance
const auth = getAuth(firebaseApp);   // Use getAuth and pass the app instance

export { auth };
export default db; // Export Firestore as the default
