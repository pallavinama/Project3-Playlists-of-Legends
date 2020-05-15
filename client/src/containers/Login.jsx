import React, { Component } from "react";
import axios from "axios";
import SignUpForm from "../components/Form/SignUp";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";

class Login extends Component {
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
      .post("/api/auth", {
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
          await this.props.history.push(`/dashboard/${decoded.id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        this.setState({ error: err.message });
      });
  };
  render() {
    return (
      <>
        <SignUpForm handleSubmit={this.handleSubmit} error={this.state.error} />
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Link to="sign-up">Need to create an account?</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
