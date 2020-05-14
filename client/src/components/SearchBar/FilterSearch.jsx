// import React, { Component } from 'react';

// class FilterSearch extends Component {
//     filteredChampions = champions.filter((champion) => {
//         const regex = new RegExp(this.state.searchTerm, "gi");
//         return champion.name.first.match(regex);
//       });
  
//       state = {
//       champions: [],
//       championsToDisplay: [],
//       searchTerm: "",
//     };
  
//     handleSubmit = (event) => {
//       event.preventDefault();
//       console.log("HandleSubmit");
//       console.log(this.state.searchTerm);
//       const champions = [...this.state.champions];
//       const filteredChampions = champions.filter((champion) => {
//         const regex = new RegExp(this.state.searchTerm, "gi");
//         return champion.name.first.match(regex);
//       });
//       this.setState({
//         championsToDisplay: filteredChampions,
//       });
//     };
// }

// export default FilterSearch;