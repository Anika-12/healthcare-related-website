import logo from './logo.svg';
import './App.css';
import initializeAuthentication from './Firebase/Firebase.initialize';
import Home from "./Components/Home/Home";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error from "./Components/Error/Error";
import Services from './Components/Services/Services';



export const userContext = createContext();


initializeAuthentication();

function App() {
  const [user, setUser] = useState({
    name: "a b",
  });
  return (
    <div className="App">
       
      <userContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Services></Services>
            </Route>
           
           
           <Route path="*">
              <Error></Error>
            </Route>
            
          </Switch>
        </Router>

      </userContext.Provider>
     
    </div>
  );
}

export default App;

