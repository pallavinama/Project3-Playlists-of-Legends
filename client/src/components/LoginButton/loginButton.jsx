import React from "react";
import axios from "axios";

function loginButton() {
  const my_client_id = "d1c5c07ebd804b5b8667bb33ae85efd7";
  const scopes = null;
  const redirect_uri = "http://localhost:3000/";

  const link =
    "https://accounts.spotify.com/authorize" +
    "?response_type=code" +
    "&client_id=" +
    my_client_id +
    (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri);

  const spotifyLogin = () => {
    const my_client_id = "d1c5c07ebd804b5b8667bb33ae85efd7";
    const scopes = null;
    const redirect_uri = "http://localhost:3000/";

    axios.get(
      "https://accounts.spotify.com/authorize" +
        "?response_type=code" +
        "&client_id=" +
        my_client_id +
        (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
        "&redirect_uri=" +
        encodeURIComponent(redirect_uri)
    );
  };
  return (
    <>
      <a href={link}>
        <button>Login with Spotify</button>
      </a>
    </>
  );
}

export default loginButton;
