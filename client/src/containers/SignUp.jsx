import React, { Component } from "react";
import axios from "axios";
import Form from "../components/Form";
import jwt from "jsonwebtoken";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: "",
    });
  };

  handleSubmit = (event, username, password) => {
    event.preventDefault();

    axios
      .post("/api/users", {
        username,
        password,
      })
      .then(async (response) => {
        console.log(response.data.data);
        if (response.data.success) {
          const decoded = await jwt.verify(
            response.data.data,
            process.env.REACT_APP_SECRET_KEY
          );
          console.log(decoded);
          await sessionStorage.setItem("jwt", response.data.data);
          await this.props.checkForToken();
          await this.props.history.push(`/complete-profile/${decoded.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ error: err.response.data.message });
      });
  };
  render() {
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1 style={{ color: "#fff" }}>Welcome to Playlist of Legends!</h1>
              <h3 style={{ color: "#fff" }}>Sign Up Below!</h3>
            </div>
          </div>
        </div>
        <Form handleSubmit={this.handleSubmit} error={this.state.error} />
      </>
    );
  }
}

export default SignUp;
