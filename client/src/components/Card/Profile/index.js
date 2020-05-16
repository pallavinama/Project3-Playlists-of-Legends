import React from "react";
import ProfileForm from "../../Form/Profile";
import "./profilestyle.css";

const ProfileCard = (props) => {
  const centerBlockBackground = {
    backgroundColor: "#fff",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    width: "60%",
  };

  return (
    <>
      <div className="container">
        {/* <div className="row"> */}
          <div className="col" style={centerBlockBackground}>
            <div className="card">
              <div className="card-header">My Profile</div>
              <div className="card-body">
                <ProfileForm />
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ProfileCard;
