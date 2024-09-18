import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeSrFtDdPd4Q0yrNCTNW3ighVXeF4QKUY",
  authDomain: "todo-app-using-firebase-8e628.firebaseapp.com",
  projectId: "todo-app-using-firebase-8e628",
  storageBucket: "todo-app-using-firebase-8e628.appspot.com",
  messagingSenderId: "439584779243",
  appId: "1:439584779243:web:a07721492939d1207207ae",
  measurementId: "G-G1GQMH58XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



































