import React, { useState } from "react";
import Input from "../../Input";

const SignUpForm = ({ error, handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container text-center" style={{marginTop: 60}}>
      {error && (
        <div
          className="row"
          id="login-alert"
          style={{ backgroundColor: "#FE6D73", paddingTop: 3 }}
        >
          <div className="col">
            <p style={{ color: "#ffffff" }}>{error}</p>
          </div>
        </div>
      )}
      <div className="row">
        <form
          className="col s12"
          onSubmit={(e) => {
            handleSubmit(e, username, password);
          }}
        >
          <div className="row">
            <Input
              id="username"
              type="username"
              name="username"
              value={username}
              label="Username"
              handleChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="row">
            <Input
              id="password"
              type="password"
              name="password"
              value={password}
              label="Password"
              handleChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                style={{ backgroundColor: "#227C9D" }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
