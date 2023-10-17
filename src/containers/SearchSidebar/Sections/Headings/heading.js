import React from "react";
import "./heading.styles.css";
import { Switch } from "@mui/material";
import TagList from "../TagList/tagList";
const Heading = ({ heading, icon, subHeading, children, tags }) => {
  return (
    <div className="heading-container">
      <div className="heading-container-header">
        <div>{icon}</div>
        <label className="heading-container-main-heading">{heading}</label>
      </div>
      <div>
        {subHeading.map((sub) => (
          <div key={sub.id_}>
            <div className="sub-heading-container">
              <label className="sub-heading-label">{sub.name}</label>
              <Switch />
            </div>
            <div className="heading-tag-container">
              <TagList tags={sub.tags} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heading;
