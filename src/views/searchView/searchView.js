import React from "react";
import "./searchView.styles.css";
import Nav from "../../containers/Nav";
import Select from "../../containers/Select";
const SearchView = () => {
  return (
    <div className="search-view-container">
      <div>
        <Nav Title={"Back"} />
      </div>
      <div className="search-view-main-container">
        <div className="search-view-inner-container">
          <Select />
        </div>
      </div>
    </div>
  );
};

export default SearchView;
