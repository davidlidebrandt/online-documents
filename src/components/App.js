import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp.js";
import { useRef } from "react";
import { AuthProvider } from "../contexts/AuthContext"
import { useAuth } from "../contexts/AuthContext.js";
import { auth } from "../firebase/Firebase"




let user;



function App() {

  const { currentUser } = useAuth();

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
        console.log(user)
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

  function User(props) {
    return (
      <div>User :{props.currentUser} </div>
    )
  }
  

  return (
    <>
    <AuthProvider>
    <div className="min-h-screen bg-main-bg bg-cover bg-center">
      <BrowserRouter>
        <Header />
        <div className="grid grid-cols-12 place-content-center h-screen">
          <User currentUser={JSON.stringify(currentUser)}/>
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
        </div>
      </BrowserRouter>
    </div>
    <Footer />
    </AuthProvider>
    </>
  );
}

export default App;
