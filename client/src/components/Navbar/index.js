import React, { Fragment } from "react";
import axios from "axios";
import LoginButton from "../LoginButton/loginButton.jsx";

const Navbar = () => {

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Playlist of Legends
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/champions">
                Champions
              </a>
            </li>
          </ul>          
          <form className="form-inline"></form>
          <LoginButton/>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
