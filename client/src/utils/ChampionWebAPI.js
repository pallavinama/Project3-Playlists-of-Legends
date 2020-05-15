import axios from "axios";

//const BASE_URL = "http://ddragon.leagueoflegends.com/cdn/10.10.3208608/data/en_US/champion.json";
const BASE_URL = "https://raw.githubusercontent.com/ngryman/lol-champions/master/champions.json";

export default {
  // Gets all champions
  getChampions: function () {
    return axios.get(BASE_URL)
      .then(function(res){
        //console.log("res.data "+res.data);
        console.log("res.data.length "+res.data.length);
        console.log("res.data.data[0].key "+res.data[0].key);
        //cResponse.champions = res.data;
        return res.data;

      })
      .catch(function(error){
        console.log("error calling api to get champions "+error);
      });
  },
  // Gets the champion with the given id
  getChampion: function (key) {
    return axios.get(BASE_URL)
      .then(function(res){
        let responseElement = {};
        console.log("input key = "+key);        
        res.data.forEach(element => {          
          if (element.key == key){
            console.log("element matched "+element.name+" "+element.key);
            responseElement = element;
          }
        });
        return responseElement;
      })
      .catch(function(error){
        console.log("error calling api to get champion "+error);
      });
  },




  // Deletes the champion with the given id
  deleteChampion: function (id) {
    return axios.delete("/api/champions/" + id);
  },
  // Saves a champion to the database
  saveChampion: function (championData) {
    return axios.post("/api/champions", championData);
  },
};