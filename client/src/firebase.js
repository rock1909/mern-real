import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-real-59cfc.firebaseapp.com",
    projectId: "mern-real-59cfc",
    storageBucket: "mern-real-59cfc.appspot.com",
    messagingSenderId: "1066256987371",
    appId: "1:1066256987371:web:225c0b8f423fa0f452faae"
};

export const app = initializeApp(firebaseConfig);