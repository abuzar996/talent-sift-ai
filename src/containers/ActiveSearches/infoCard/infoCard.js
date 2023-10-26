import React from "react";
import "./infoCard.styles.css";
import Avatar from "../../../components/Avatar";
import { AiFillStar } from "react-icons/ai";
const InfoCard = ({ name, currentRole, company, image }) => {
  return (
    <div className="info-card-container">
      <div className="info-card-left-inner-container">
        <Avatar image={image} />
      </div>
      <div className="info-card-right-inner-container">
        <label className="info-card-candidate-name">{name}</label>
        <label className="info-card-candidate-headline">
          {currentRole} at {company}
        </label>
        <div className="info-card-priority-section ">
          <div className="info-card-candidate-priority">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="info-card-candidate-priority-remarks">
            <label>High priority Candidate</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
