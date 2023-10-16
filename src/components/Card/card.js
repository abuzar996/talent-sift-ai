import React from "react";
import "./card.styles.css";
const Card = ({ icon, heading, description, color }) => {
  return (
    <div className="card-container">
      <div className="card-inner-container">
        <div className="card-icon" style={{ color: color }}>
          {icon}
        </div>
        <label className="card-heading">{heading}</label>
        <label className="card-description">{description}</label>
      </div>
    </div>
  );
};

export default Card;
