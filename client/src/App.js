import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginButton from "./components/LoginButton/loginButton";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import Champions from "./containers/Champions";
import Search from "./containers/Search";
import Details from "./containers/Details";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path ="/" component={LoginButton}/>
      <Route exact path="/champions" component={Champions} />
      <Route exact path="/champions/:id" component={Search} />
      <Route exact path="/spotify" render={routeProps => (<LoggedIn {...routeProps}/>)}/>
    </Router>
  );
}

export default App;
