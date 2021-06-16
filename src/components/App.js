import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Header.js"
import Footer from "./Footer.js"
import Home from "./Home"


function App() {
  return (
    <div className="min-h-screen bg-main-bg bg-cover bg-center">
    
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
          </Route>
          <Route path="/signup">
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter> 
     
    </div>
  );
}

export default App;
