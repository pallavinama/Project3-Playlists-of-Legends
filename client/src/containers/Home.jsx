import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container text-center" id="homepage-cover">
          <div className="row">
            <div className="col">
              <h1 style={{ color: "#fff" }}>Playlist for Legends!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 style={{ color: "#fff" }}>The Music for Champions!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/sign-up">
                <button className="btn btn-primary" type="submit" name="action">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
