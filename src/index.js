import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { initializeApp } from 'firebase/app';
// import admin from 'firebase-admin';

// import serviceAccount from "./portafolio-75ead-firebase-adminsdk-q88nc-dca514ed16.json";

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "API_KEY",
//   authDomain: "PROJECT_ID.firebaseapp.com",
//   // The value of `databaseURL` depends on the location of the database
//   databaseURL: "https://DATABASE_NAME.firebaseio.com",
//   projectId: "PROJECT_ID",
//   storageBucket: "PROJECT_ID.appspot.com",
//   messagingSenderId: "SENDER_ID",
//   appId: "APP_ID",
//   // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//   measurementId: "G-MEASUREMENT_ID",
//   //...
// };

// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
