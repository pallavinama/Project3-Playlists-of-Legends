import React, { Component } from "react";
import "./SearchBar.css";
import List from "../List/index.js";

class SearchBar extends Component {
  state = {
    champions: [],
    championsToDisplay: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.getChampions();
  }

  clearFilter = () => {
    this.setState({
      championsToDisplay: this.state.champions,
      searchTerm: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("HandleSubmit");
    console.log(this.state.searchTerm);
    const champions = [...this.state.champions];
    const filteredChampions = champions.filter((champions) => {
      const regex = new RegExp(this.state.searchTerm, "gi");
      return champions.name.first.match(regex);
    });
    this.setState({
      championsToDisplay: filteredChampions,
    });
  };

  handleSort = (event) => {
    event.preventDefault();
    console.log("HandleSort");
    const champions = [...this.state.champions];
    const sortedNames = champions.sort((a, b) => {
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
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
