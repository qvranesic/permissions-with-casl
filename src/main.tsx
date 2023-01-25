import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkOv6G6DlD_mLGRta9G9l37ecqvxS0u94",
  authDomain: "permissions-with-casl.firebaseapp.com",
  projectId: "permissions-with-casl",
  storageBucket: "permissions-with-casl.appspot.com",
  messagingSenderId: "638836470128",
  appId: "1:638836470128:web:95019699f19ea498a6dfb5",
  measurementId: "G-QZV73H5Y80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("analytics", analytics);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

console.log("db", db);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
