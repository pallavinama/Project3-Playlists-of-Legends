// import React, { Component } from 'react';

// // class FilterSearch extends Component {
//     class FilterSearch extends React.Component {
//         constructor(){
//           super();
//           this.state ={
//             users: ['abc',"pdsa","eccs","koi"],
//             input: '',
//           }
//         }
      
//         onChangeHandler(e){
//           this.setState({
//             input: e.target.value,
//           })
//         }
      
//         render (){
//             const list = this.state.users
//               .filter(d => this.state.input === '' || d.includes(this.state.input))
//               .map((d, index) => <li key={index}>{d}</li>);
      
//           return (<div>
//             <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
//               <ul>{list}</ul>
//             </div>)
//         }
//       }
      
//       ReactDOM.render(<First/>,document.getElementById('root'));
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