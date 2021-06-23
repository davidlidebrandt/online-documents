import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp.js";
import { useRef } from "react";
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
let user;




function App() {
  const auth = app.auth();

  const emailSignUp = useRef();
  const passwordSignUp = useRef();
  const emailLogIn = useRef();
  const passwordLogIn = useRef();

  function handleSignUpSubmit(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailSignUp.current.value,
        passwordSignUp.current.value
      )
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..
      });
  }

  function handleLogInSubmit(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailLogIn.current.value,
        passwordLogIn.current.value
      )
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..
      });
  }

  function logOut() {
    auth.signOut().then(() => {
      console.log("Logged out")
      user = undefined
      console.log(user)
    }).catch((error) => {
      console.log("error")
    });
  }

  return (
    <>
    <div className="min-h-screen bg-main-bg bg-cover bg-center grid relative place-items-center grid-cols-4">
      <BrowserRouter>
        <Header />
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn handleSubmit={handleLogInSubmit} email={emailLogIn} password={passwordLogIn}/>
          </Route>
          <Route path="/signup">
            <SignUp handleSubmit={handleSignUpSubmit} email={emailSignUp} password={passwordSignUp}/>
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
    <Footer />
    </>
  );
}

export default App;
