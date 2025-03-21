// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore database
import { getAuth } from "firebase/auth"; // Authentication
import { getAnalytics } from "firebase/analytics"; // Analytics (if needed)

const firebaseConfig = {
  apiKey: "AIzaSyAnUZH56306Uin8Tcki8GPGwathaDnKu90",
  authDomain: "udemy-be545.firebaseapp.com",
  projectId: "udemy-be545",
  storageBucket: "udemy-be545.appspot.com", // ✅ Fixed storageBucket
  messagingSenderId: "809939852263",
  appId: "1:809939852263:web:fe94a2c97dafea3e63bb42",
  measurementId: "G-YQWFCVN8RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // ✅ Works only if analytics is enabled
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
