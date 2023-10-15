import React from "react";
import "./card.styles.css";
const Card = ({ icon, heading, description }) => {
  return (
    <div className="card-container">
      <div className="card-inner-container">
        <div className="card-icon">{icon}</div>
        <label className="card-heading">Hello world</label>
        <label className="card-description">description</label>
      </div>
    </div>
  );
};

export default Card;
