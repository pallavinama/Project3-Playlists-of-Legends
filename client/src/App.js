import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import jwt from "jsonwebtoken";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import CompleteProfile from "./containers/CompleteProfile";
import Dashboard from "./containers/Dashboard";
import NotFound from "./containers/NotFound";
import SignUp from "./containers/SignUp";
import PrivateRoute from "./components/App/PrivateRoute";

import Champions from "./containers/Champions";
import Search from "./containers/Search";

import WelcomeCard from "./components/Jumbotron/Jumbotron";
import LoginButton from "./components/LoginButton/loginButton";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import "./App.css";

function App() {
  const [userObject, setUserObject] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkForToken();
  }, []);

  const checkForToken = async () => {
    const tokenFromStorage = await sessionStorage.getItem("jwt");
    if (tokenFromStorage) {
      setIsLoggedIn(true);
      try {
        const decoded = await jwt.verify(
          tokenFromStorage,
          process.env.REACT_APP_SECRET_KEY
        );
        if (decoded && decoded.email && decoded.id) {
          setUserObject(decoded);
          setIsLoggedIn(true);
        }
      } catch (e) {
        setUserObject({});
        setIsLoggedIn(false);
        sessionStorage.setItem("jwt", "");
        console.error(e);
      }
    }
  };

  const logOutUser = () => {
    setUserObject({});
    setIsLoggedIn(false);
    sessionStorage.setItem("jwt", "");
  };

  return (
    <>
      <Router>
        <Navbar
          isLoggedIn={isLoggedIn}
          logOutUser={logOutUser}
          userObject={userObject}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} checkForToken={checkForToken} />
            )}
          />
          <Route
            path="/sign-up"
            render={(props) => (
              <SignUp {...props} checkForToken={checkForToken} />
            )}
          />
          <Route
            path="/complete-profile/:id"
            render={(props) => <CompleteProfile {...props} />}
          />
          <Route
            path="/dashboard/:id"
            render={(props) => <Dashboard {...props} />}
          />
          <PrivateRoute path="/champions" component={Champions} />
          <Route path="*">
            <NotFound />
          </Route>
          {/* <Route exact path ="/" component={LoginButton}/>
      <Route exact path="/spotify" render={routeProps => (<LoggedIn {...routeProps}/>)}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
