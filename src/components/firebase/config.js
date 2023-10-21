import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4uVJ0GcErOlpz8ulyhoIKfLSpemMmbvo",
  authDomain: "proyferrerik.firebaseapp.com",
  projectId: "proyferrerik",
  storageBucket: "proyferrerik.appspot.com",
  messagingSenderId: "584405447054",
  appId: "1:584405447054:web:4c02e4f52852c1e347f4df",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
