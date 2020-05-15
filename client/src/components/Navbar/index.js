import React from "react";
import { NavLink } from "react-router-dom";
// import axios from "axios";
import "./style.css";

const NavBar = (props) => {
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
            <ul className="nav navbar-nav navbar-right ml-auto">
              {/* <li className="nav-item">
                <Link to={`/new-match/${props.userObject.id}`}>Find New Matches</Link>
              </li> */}
              <li className="nav-item"><NavLink to={`/new-match/${props.userObject.id}`}>Find New Matches</NavLink></li>
              <li className="nav-item"><NavLink to={`/user/${props.userObject.id}`}>My Profile</NavLink></li>
              <li className="nav-item" onClick={props.logOutUser}><a className="nav-link" href="/">Sign Out</a></li>
            </ul>
          </>
        ) : (
          <>
            <ul className="nav navbar-nav navbar-right ml-auto">
              <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
