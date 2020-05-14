import React, { useState, useEffect } from "react";
// import ChampionWebAPI from "../utils/ChampionWebAPI";
import ChampionDbAPI from "../utils/ChampionDbAPI";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Champions = () => {
  // Setting our component's initial state
  const [champions, setChampions] = useState([]);

  // Load all champions and store them with setChampions
  useEffect(() => {
    loadChampions();
  }, []);

  // Loads all champions and sets them to champions
  const loadChampions = () => {
    ChampionDbAPI.getChampions()
      .then((res) => setChampions(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      {champions.length ? (
        <List>
          {champions.map((champion) => (
            <ListItem key={champion._id}>
              <Link to={"/champions/" + champion._id}>
                <Card
                  name={champion.name}
                  title={champion.title}
                  role={champion.role}
                  image={champion.image}
                  lore={champion.lore}
                  genre={champion.genre}
                  key={champion._id}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
};

export default Champions;
