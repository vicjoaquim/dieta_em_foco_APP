import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFAFU2AfufoAvmWGW4B6T3Yj4DCuZtnwY",
    authDomain: "dieta-em-focoapp.firebaseapp.com",
    databaseURL: "https://dieta-em-focoapp-default-rtdb.firebaseio.com",
    projectId: "dieta-em-focoapp",
    storageBucket: "dieta-em-focoapp.firebasestorage.app",
    messagingSenderId: "409995500502",
    appId: "1:409995500502:web:ba04a2838bc5b83ca12277",
    measurementId: "G-W86FNDHP3L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
