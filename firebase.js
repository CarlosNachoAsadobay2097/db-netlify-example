// firebase.js

// Importa los módulos necesarios desde el CDN de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Configuración de tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-A9r4eR7srbZCHb1FfiYAwih98IWv-5w",
  authDomain: "foro-ejemplo.firebaseapp.com",
  projectId: "foro-ejemplo",
  storageBucket: "foro-ejemplo.firebasestorage.app",
  messagingSenderId: "621867422920",
  appId: "1:621867422920:web:ea13c8c1db4fa27d5d41fd",
  measurementId: "G-Y3N76NNZ86"
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta la base de datos para usarla en otros archivos
export { db };
