import React from "react";
import "./championstyle.css";

const ChampionCard = (props) => {
  return (
    <div className="card">
      <div className="card=header">
        {/* <h5 className="card-title">{props.name}</h5> */}
      </div>
      <div className="card-body text-dark">
        <img
          className="card-img"
          src={props.image}
          alt={props.image}
          style={{ height: "100px", width: "100px" }}
        ></img>
      </div>
      <div className="card-footer">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default ChampionCard;
