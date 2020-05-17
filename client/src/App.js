import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomeCard from "./components/Jumbotron/Jumbotron"
import LoggedIn from "./components/LoggedIn/LoggedIn";
import Champions from "./containers/Champions";
import Search from "./containers/Search";
import Details from "./containers/details";
import "./App.css";
import Home from "./containers/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path ="/" component={Home}/>
      <Route exact path="/champions" component={Champions} />
      <Route exact path="/champions/:key" component={Details} />
      <Route exact path="/spotify" render={routeProps => (<LoggedIn {...routeProps}/>)}/>
    </Router>
  );
}

export default App;
