import logo from './logo.svg';
import './App.css';
import initializeAuthentication from './Firebase/Firebase.initialize';
import Home from "./Components/Home/Home";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error from "./Components/Error/Error";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Services from './Components/Services/Services';
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";



export const userContext = createContext();


initializeAuthentication();

function App() {
  const [user, setUser] = useState({
    name: "a b",
  });
  return (
    <div className="App">
         <AuthProvider>
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
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
           
           
           <Route path="*">
              <Error></Error>
            </Route>
            
          </Switch>
        </Router>

      </userContext.Provider>
     </AuthProvider>
    </div>
  );
}

export default App;

