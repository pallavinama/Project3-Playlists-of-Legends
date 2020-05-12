import axios from "axios";

export default {
  // Gets all champions
  getChampions: function () {
    return axios.get("/api/champions");
  },
  // Gets the champion with the given id
  getChampion: function (id) {
    return axios.get("/api/champions/" + id);
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
