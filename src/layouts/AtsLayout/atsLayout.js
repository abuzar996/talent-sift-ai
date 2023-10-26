import React from "react";
import "./atsLayout.styles.css";
import SearchHeader from "../../containers/SearchHeader";
import AtsTable from "../../containers/Tables/AtsTable";
const AtsLayout = () => {
  return (
    <div className="ats-layout-container">
      <SearchHeader />
      <AtsTable />
    </div>
  );
};

export default AtsLayout;
