import React from "react";
import "./detailColumn.style.css";
import { AiOutlineEdit, AiOutlinePaperClip } from "react-icons/ai";
//AiOutlineEdit;
//
const DetailColumn = () => {
  return (
    <div className="detail-column-custom-table-container">
      <div className="detail-column-custom-table-icons">
        <AiOutlineEdit />
      </div>
      <div className="detail-column-custom-table-icons">
        <AiOutlinePaperClip />
      </div>
    </div>
  );
};

export default DetailColumn;
