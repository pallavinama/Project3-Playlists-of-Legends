import React, { Component } from "react";
import championWebAPI from "../../utils/ChampionWebAPI";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  searchAllLoLChampions = () => {
    championWebAPI.searchAll()
    .then(res => this.setState({ results: res.data }))
    .catch(err => console.log(err));
  };

  searchOneLoLChampion = character => {
    championWebAPI.searchOne(character)
    .then(res => this.setState({ results: res.data }))
    .catch(err => console.log(err));
  };

  render() {
    return <div></div>;
  }
}

export default SearchResultContainer;
