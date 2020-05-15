import React from "react";
// import jwt from "jsonwebtoken";
import { Route, Redirect } from "react-router-dom";

const checkForToken = () => {
  return sessionStorage.getItem("jwt");
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (checkForToken()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
