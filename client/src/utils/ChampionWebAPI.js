import axios from "axios";

const BASEURL = `http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion`;

// Export an object with "search" methods that search the LoL API for the passed query
export default {
  searchAll: function () {
    return axios.get(BASEURL + `.json`);
  },
  searchOne: function (character) {
    return axios.get(BASEURL + `/` + character + `.json`);
  },
};