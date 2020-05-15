import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

class CompleteProfile extends Component {
  state = {
    name: "",
    age: "",
    gender: "",
    accessToken: "",
    champions: [],
  };

  componentDidMount() {

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleDropdownChange = (event) => {
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/users/${this.props.match.params.id}`, {
        name: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Complete Your Profile</h1>
          </div>
        </div>
        <div className="row">
          <form
            className="col s12"
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <Input
              id="name"
              label="Name"
              type="text"
              name="name"
              value={this.state.name}
              handleChange={this.handleChange}
            />
            <Input
              id="age"
              label="Age"
              type="text"
              name="age"
              value={this.state.age}
              handleChange={this.handleChange}
            />
            <Input
              id="gender"
              label="Gender"
              type="text"
              name="gender"
              value={this.state.gender}
              handleChange={this.handleChange}
            />
            <Button text="Complete"></Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CompleteProfile;
