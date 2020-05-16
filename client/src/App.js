import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/App/PrivateRoute";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import CompleteProfile from "./containers/CompleteProfile";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import NotFound from "./containers/NotFound";
import SignUp from "./containers/SignUp";
import jwt from "jsonwebtoken";
import WelcomeCard from "./components/Jumbotron/Jumbotron"
import LoggedIn from "./components/LoggedIn/LoggedIn";
import Champions from "./containers/Champions";
import Search from "./containers/Search";
import Details from "./containers/details";
import "./App.css";

// import Champions from "./containers/Champions";
// import LoginButton from "./components/LoginButton/loginButton";
// import LoggedIn from "./components/LoggedIn/LoggedIn";

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
        if (decoded && decoded.username && decoded.id) {
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
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/champions" component={Champions} />
          <PrivateRoute path="/champions/:key" component={Details} />
          <Route path="*">
            <NotFound />
          </Route>
          {/* <Route exact path="/" component={LoginButton}/> */}
          {/* <Route exact path="/spotify" render={routeProps => (<LoggedIn {...routeProps}/>)}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
