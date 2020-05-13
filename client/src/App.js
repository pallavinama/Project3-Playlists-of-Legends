import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton/loginButton";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col">
            <Route exact path = "/" component={LoginButton}/>
            <Route exact path="/spotify" render={routeProps => (<LoggedIn {...routeProps}/>)}/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
