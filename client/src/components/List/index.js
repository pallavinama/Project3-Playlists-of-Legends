import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="row">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <div className="col-md-3 box-padding"><li className="list-group-item">{children}</li></div>;
}