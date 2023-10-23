import React from "react";
import Priority from "../../Priority";
import "./matchColumn.styles.css";
const MatchColumn = ({ priority }) => {
  return (
    <div className="match-column-container">
      <Priority priority={priority} />
    </div>
  );
};

export default MatchColumn;
