import React from "react";
import "./actionColumns.styles.css";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { IoIosDoneAll } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";
//AiOutlineEdit;
//
const ActionsColumn = () => {
  return (
    <div className="actions-column-custom-table-container">
      <div className="actions-column-custom-table-icons-over">
        <PiDotsThreeCircleLight />
      </div>
      <div className="actions-column-custom-table-icons-over">
        <IoIosDoneAll />
      </div>
      <div className="actions-column-custom-table-icons-over">
        <CiMail />
      </div>
      <div className="actions-column-custom-table-icons">
        <FiMoreHorizontal />
      </div>
    </div>
  );
};

export default ActionsColumn;
