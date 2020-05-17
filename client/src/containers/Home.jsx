import React from "react";
import Logo from "../images/logo.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <p>Welcome to</p>
                  <img src={Logo} alt="Logo" style={{height: "100px"}} />
                </div>
                <div className="card-text" style={{color: "white"}}>
                  <p>
                    You can use this app to login to your Spotify account, and
                    find playlists matched with your favorite League of Legends
                    characters!
                  </p>
                  <p>
                    Select the Champions tab to search for your character and
                    see all the characters listed out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
