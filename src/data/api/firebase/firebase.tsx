// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app"
import { getAuth, type Auth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "chat-b6411.firebaseapp.com",
    projectId: "chat-b6411",
    storageBucket: "chat-b6411.firebasestorage.app",
    messagingSenderId: "98209154052",
    appId: "1:98209154052:web:b218fd92e7850d64eea151",
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig)
const auth: Auth = getAuth()
export { app, auth }
