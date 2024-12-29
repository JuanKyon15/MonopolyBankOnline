
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAXPBOiw8_VTBgxzcczcPR4yS1p_ynioGQ",
  authDomain: "monono-bd90d.firebaseapp.com",
  databaseURL: "https://monono-bd90d-default-rtdb.firebaseio.com",
  projectId: "monono-bd90d",
  storageBucket: "monono-bd90d.firebasestorage.app",
  messagingSenderId: "16057362867",
  appId: "1:16057362867:web:dc64933bb3b50c00f0c3c6",
  measurementId: "G-H5P3TN9YMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);