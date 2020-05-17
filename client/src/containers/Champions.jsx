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
      //console.log("champions "+this.state.champions.length);
    }); 
  }
  
  render(){
    //console.log("chamipions in "+this.state.champions.length);    
    return(      
      <div className="container">
        {<SearchBar></SearchBar>}
    </div>      
    );
  }
}

export default Champions;