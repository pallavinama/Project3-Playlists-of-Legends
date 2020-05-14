import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function LoggedIn(props) {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const base64 = `Basic ${btoa(client_id)}:${btoa(client_secret)}`;

  useEffect(() => {
    let code = props.location.search;
    console.log(code);
    var authorization_code = "";
    for (var i = 6; i < code.length; i++) {
      authorization_code += code[i];
    }
    console.log("Auth code:", authorization_code, "Base64: ", base64);
    axios
      .post("/api/spotify", { authorization_code: authorization_code })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  // const axiosCall = (authorization_code) => {
  //   console.log("Auth code: ", authorization_code, "Base64: ", base64);
  //   var authOptions = {
  //     url: "https://accounts.spotify.com/api/token",
  //     method: "post",

  //     headers: {
  //       Authorization: base64,
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     data: {
  //       grant_type: "authorization_code",
  //       code: authorization_code,
  //       redirect_uri: "http://localhost:3000/spotify",
  //     },
  //   };

  //   const data = {
  //     grant_type: "authorization_code",
  //     code: authorization_code,
  //     redirect_uri: "http://localhost:3000/spotify",
  //   };

  //   axios(authOptions)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return <p>You are now logged in!</p>;
}

export default LoggedIn;
