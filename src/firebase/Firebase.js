import firebase from "firebase/app";
import "firebase/auth";


const config = {
  apiKey: "AIzaSyAkeLkUjtpL8m1ROJlCZi3SghimoH4SDTk",
  authDomain: "online-documents-8aa85.firebaseapp.com",
  projectId: "online-documents-8aa85",
  storageBucket: "online-documents-8aa85.appspot.com",
  messagingSenderId: "328196634102",
  appId: "1:328196634102:web:9d2bfd40e2dab8026d83d7",
};


const app = firebase.initializeApp(config);

export const auth = app.auth();
export default app;