import React, { Children } from "react";
import ChampionWebAPI from "../utils/ChampionWebAPI";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SpotifyPlaylist from "../components/SpotifyPlaylists";
import "./style.css"

class Details extends React.Component {
  state = {
    key: "",
    champion: {},
  };

  constructor(props) {
    super(props);
    let key = this.props.match.params.key;
    console.log("this.props.key = " + key);
    this.state = { key: key };
  }

  componentDidMount() {
    ChampionWebAPI.getChampion(this.state.key).then((data) => {
      console.log("web api response data.title " + data.title);
      this.setState({ champion: data });
      console.log("champion " + this.state.champion);
    });
  }

  render() {
    //console.log("chamipion is "+this.state.champion.key);
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <SpotifyPlaylist inputkey={this.state.key}/>
          </div>
          <div className="col">
            {this.state.champion ? (
              <ListItem key={this.state.champion.key}>
                <Card
                  name={this.state.champion.name}
                  title={this.state.champion.title}
                  image={this.state.champion.icon}
                  key={this.state.champion.description}
                />
                {this.state.champion.description}
                <br></br>
                <br></br>
                {this.state.champion.tags}
              </ListItem>
            ) : (
              <h3>No Details to Display</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
