import React from "react";
import React, { Component } from 'react';
import "./SearchBar.css";
import "./FilterSearch";

class FilterSearch extends React.Component {
    constructor(){
      super();
      this.state ={
        users: ['abc',"pdsa","eccs","koi"],
        input: '',
      }
    }
  
    onChangeHandler(e){
      this.setState({
        input: e.target.value,
      })
    }
  
    render (){
        const list = this.state.users
          .filter(d => this.state.input === '' || d.includes(this.state.input))
          .map((d, index) => <li key={index}>{d}</li>);
  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={this.state.input}
          onChange={this.onChangeHandler.bind(this)}
        ></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
};

export default SearchBar;
