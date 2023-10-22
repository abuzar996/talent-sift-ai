import React from "react";
import "./imageColumn.styles.css";
import image1 from "../../../assets/photo1.jpg";
const ImageColumn = () => {
  return (
    <div className="image-column-custom-table-container">
      <img src={image1} alt="img"></img>
    </div>
  );
};

export default ImageColumn;
