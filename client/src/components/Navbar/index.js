import React, { Fragment } from "react";
import axios from "axios";

const Navbar = () => {
  const my_client_id = "d1c5c07ebd804b5b8667bb33ae85efd7";
  const scopes = "playlist-modify-private";
  const redirect_uri = "http://localhost:3000/spotify";

  const link =
    "https://accounts.spotify.com/authorize" +
    "?response_type=code" +
    "&client_id=" +
    my_client_id +
    (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri);

  axios.get(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      my_client_id +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri)
  );

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
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">

           <li className="nav-item">
              <a className="nav-link" href="/champions">
                Champions
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/champions/:id">
                Search
              </a>
            <li>

              <li className="nav-item">  
              <a className="nav-link" href="/details/:id">
                Details
              </a>
              </li>
              
              </li>
            </li>
          </ul>
          <a href={link}>
            <button className="btn btn-outline-success">
              Login with Spotify
            </button>
          </a>
          <form className="form-inline"></form>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
