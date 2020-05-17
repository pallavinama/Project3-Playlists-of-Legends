import React, { Component, Fragment } from "react";
import ChampionWebAPI from "../../utils/ChampionWebAPI";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import "./SearchBar.css";
//import List from "../List/index.js";

class SearchBar extends Component {
  state = {
    championsData: [],
    championsToDisplay: [],
    searchTerm: "",
  };

  componentDidMount() {
    ChampionWebAPI.getChampions().then(data => {
      console.log("searchbar mount response "+data.length);
      this.setState({championsData: data})
      this.setState({championsToDisplay: data})
      //console.log("searchbar champions "+this.state.champions.length);

      
    });
  }

  clearFilter = () => {
    this.setState({
      championsToDisplay: this.state.championsData,
      searchTerm: "",
    });
  };

  handleChange = (event) => {
    const searchTermInput = event.target.value;
    this.setState({searchTerm: searchTermInput});
    //console.log("state.searchTerm "+this.state.searchTerm);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("HandleSubmit for searchTerm "+this.state.searchTerm);
    console.log("HandleSubmit championsData length "+this.state.championsData.length);

    ChampionWebAPI.getChampions().then(data => {
      console.log("searchbar handleSubmit response "+data.length);
      this.setState({championsData: data})
      //console.log("searchbar champions "+this.state.champions.length);
    });

    const championsDataLocal = [...this.state.championsData];
    let championName;
    let filteredChampions = [];
    championsDataLocal.forEach(element => {       
      championName = element.name.toUpperCase();   
      if (championName.indexOf(this.state.searchTerm.toUpperCase()) != -1 || this.state.searchTerm == ""){
        //console.log("element searchTerm matched "+element.name+" "+element.key);
        filteredChampions.push(element);
      }
    });

    //const filteredChampions = champions
    this.setState({
      championsData: [],
      championsToDisplay: filteredChampions,
    });
  };

  handleSort = (event) => {
    event.preventDefault();
    console.log("HandleSort");
    const championsDataLocal = [...this.state.championsData];
    const sortedNames = championsDataLocal.sort((a, b) => {
      if (a.name.first < b.name.first) return -1;
      else if (a.name.first > b.name.first) return 1;
      return 0;
    });
    this.setState({
      championsToDisplay: sortedNames,
    });
  };

  render() {
    return (
      <Fragment>
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange}
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={this.handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
      <div className="row">
      <div className="col"></div>
      <List>
        {this.state.championsToDisplay.map((champion) => (
          <ListItem key={champion.key}>
            <Link to={"/champions/" + champion.key}>
              <Card
                name={champion.name}
                // title={champion.title}
                image={champion.icon}
                // key={champion.key}
              />
            </Link>
          </ListItem>
        ))}
      </List>
      </div>
      </Fragment>
    );
  }
}

export default SearchBar;
