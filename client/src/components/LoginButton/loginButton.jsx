import React from "react";
import axios from "axios";

function loginButton() {
  const my_client_id = "d1c5c07ebd804b5b8667bb33ae85efd7";
  const scopes = "playlist-modify-private";
  const redirect_uri = "https://rocky-stream-45210.herokuapp.com/spotify";
  // const redirect_uri = 'http://localhost:3000/spotify/';

  const link =
    "https://accounts.spotify.com/authorize" +
    "?response_type=code" +
    "&client_id=" +
    my_client_id +
    (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri);

  const spotifyLogin = () => {
    const my_client_id = process.env.REACT_APP_CLIENT_ID;
    const scopes = "playlist-modify-private";
    const redirect_uri = "https://rocky-stream-45210.herokuapp.com/spotify";
    // const redirect_uri = 'http://localhost:3000/spotify/';

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
        <button className="btn btn-light">Login with Spotify</button>
      </a>
    </>
  );
}

export default loginButton;
