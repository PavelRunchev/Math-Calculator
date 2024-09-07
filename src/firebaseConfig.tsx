
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyA7RQ9Jj7_aYiMmS3rbMETrqa4BxQSmFE8",
  authDomain: "math-calculator-71805.firebaseapp.com",
  databaseURL: "https://math-calculator-71805-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "math-calculator-71805",
  storageBucket: "math-calculator-71805.appspot.com",
  messagingSenderId: "730927946559",
  appId: "1:730927946559:web:503eeef316beed0338118a"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;