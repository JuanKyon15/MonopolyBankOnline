// Importar las funciones necesarias de Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la referencia a la base de datos
const db = getDatabase(app);