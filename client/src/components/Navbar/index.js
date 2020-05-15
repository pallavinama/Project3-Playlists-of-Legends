// import React, { Fragment } from "react";
// import axios from "axios";

// const Navbar = () => {
//   const my_client_id = "d1c5c07ebd804b5b8667bb33ae85efd7";
//   const scopes = "playlist-modify-private";
//   const redirect_uri = "http://localhost:3000/spotify";

//   const link =
//     "https://accounts.spotify.com/authorize" +
//     "?response_type=code" +
//     "&client_id=" +
//     my_client_id +
//     (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
//     "&redirect_uri=" +
//     encodeURIComponent(redirect_uri);

//   axios.get(
//     "https://accounts.spotify.com/authorize" +
//       "?response_type=code" +
//       "&client_id=" +
//       my_client_id +
//       (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
//       "&redirect_uri=" +
//       encodeURIComponent(redirect_uri)
//   );

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = (props) => {
  return (
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
        {props.isLoggedIn ? (
          <>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={`/new-match/${props.userObject.id}`}>
                  Find New Matches
                </Link>
              </li>
              <li className="nav-item" onClick={props.logOutUser}>
                <a className="nav-link" href="/">
                  Sign Out
                </a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
