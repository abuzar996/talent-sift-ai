import React from "react";
import "./heading.styles.css";
import { Switch } from "@mui/material";
import TagList from "../TagList";
import { toggleFiler } from "../../../../redux/slices/appSlice";
import { useDispatch } from "react-redux";
const Heading = ({ heading, icon, subHeading }) => {
  const dispatch = useDispatch();
  function changeFilter(data) {
    dispatch(toggleFiler({ name: data.name, heading }));
  }
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
              <Switch checked={sub.active} onChange={() => changeFilter(sub)} />
            </div>
            <div className="heading-tag-container">
              <TagList
                tags={sub.tags}
                opened={sub.opened}
                heading={heading}
                subHeading={sub}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heading;
