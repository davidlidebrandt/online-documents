import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp.js";
import CreateDocs from "./CreateDocs.js";
import { useRef } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext"

function App() {

  const { currentUser } = useAuth();
  const { login } = useAuth();
  const { logout } = useAuth();
  const { signup  } = useAuth();


  const emailSignUp = useRef();
  const passwordSignUp = useRef();
  const emailLogIn = useRef();
  const passwordLogIn = useRef();

  const docText = useRef();

  function handleSignUpSubmit(e) {
    e.preventDefault();
    signup(emailSignUp.current.value, passwordSignUp.current.value)
      .then((userCredential) => {
        console.log(currentUser)
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  }

  function handleLogInSubmit(e) {
  e.preventDefault();
   login(emailLogIn.current.value, passwordLogIn.current.value)
      .then((userCredential) => {
        console.log(currentUser)
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  }

  function logOut() {
    logout().then(() => {
      console.log("Logged out")
      console.log(currentUser)
    }).catch((error) => {
      console.log("error")
    });
  }

function handleSave(e) {
  e.preventDefault();
  console.log(docText.current.value);
}

function simulateSubmitSaveDoc() {
  document.getElementById("saveDoc").click();
}

function clearDoc() {
  docText.current.value = ""
}

  return (
    <>
    <AuthProvider>
    <div className="min-h-screen bg-main-bg bg-cover bg-center">
      <BrowserRouter>
        <Header logout={logOut}/>
        <div className="grid grid-cols-12 place-content-center h-screen">
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
          <Route path="/docs">
            <CreateDocs handleSave={handleSave} docText={docText} simulateSubmitSaveDoc={simulateSubmitSaveDoc} clearDoc={clearDoc}/>
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
