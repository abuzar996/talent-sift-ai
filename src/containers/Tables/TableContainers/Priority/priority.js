import React from "react";
import Low from "./Low";
import High from "./High";
const Priority = ({ priority }) => {
  return <>{priority && (priority === "high" ? <High /> : <Low />)}</>;
};

export default Priority;
