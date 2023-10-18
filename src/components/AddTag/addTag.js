import React from "react";
import "./addTag.styles.css";
import { GrFormAdd } from "react-icons/gr";
const AddTag = ({ onClick }) => {
  return (
    <div onClick={onClick} className="add-tag-container">
      <GrFormAdd />
    </div>
  );
};

export default AddTag;
