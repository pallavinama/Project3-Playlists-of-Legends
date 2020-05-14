import React from 'react';
import ChampionWebAPI from "../utils/ChampionWebAPI";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./style.css"
import SearchBar from "../components/SearchBar/SearchBar"

class Champions extends React.Component {
  state = {
    "champions": []
  }

  constructor(props){
    super(props);
    console.log(this.props);
    //this.setState({champions: ChampionWebAPI.getChampions()});
    //this.state = {champions: ChampionWebAPI.getChampions().champs};
  }

  componentDidMount(){
    ChampionWebAPI.getChampions().then(data => {
      console.log("web api response "+data.length);
      this.setState({champions: data})
      console.log("champions "+this.state.champions.length);
    }); 
  }
  
  render(){
    console.log("chamipions in "+this.state.champions.length);    
    return(      
      <div className="container">
        <SearchBar></SearchBar>
      <div className="row">
        <div className="col"></div>
        {this.state.champions.length ? (
          <List>
            {this.state.champions.map((champion) => (
              <ListItem key={champion.key}>
                <Link to={"/champions/" + champion.key}>
                  <Card
                    name={champion.name}
                    title={champion.title}
                    image={champion.icon}
                    key={champion.key}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>      
    );
  }
}

export default Champions;