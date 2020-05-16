import React, { Component } from "react";
import ProfileCard from "../components/Card/Profile";
// import { Link } from "react-router-dom";
// import UserDbAPI from "../utils/UserDbAPI";

class Profile extends Component {
  // state = {
  //   user: {},
  // };
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  // }

  // componentDidMount() {
  //   UserDbAPI.getUser().then((data) => {
  //     console.log("web api response " + data);
  //     this.setState({ user: data });
  //     console.log("user.username " + this.state.user.username);
  //   });
  // }

  render() {
    return (
      <>
        {/* <Link to={"/user/" + user.key}>
          <ProfileCard
            username={user.username}
            password={user.password}
            name={user.name}
            age={user.age}
            gender={user.gender}
          />
        </Link> */}
        <ProfileCard />
      </>
    );
  }
}

export default Profile;
