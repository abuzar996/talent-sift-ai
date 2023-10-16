import React from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { BiSearch } from "react-icons/bi";
import { searchData } from "../../constants/starterData.js";
import "./select.styles.css";
const Select = () => {
  return (
    // <div className="select-main-container">
    <div className="select-container">
      <div className="select-container-heading">
        <label>Create Your Search</label>
      </div>
      <div className="select-container-description">
        <label>How would you like to find your candidates?</label>
      </div>
      <div className="select-options-grid-section">
        <div className="select-options-grid">
          <div className="select-options-container">
            {searchData.map((data) => (
              <Card key={data.id_} {...data} />
            ))}
          </div>
        </div>
      </div>

      <div className="select-options-footer-input-section">
        <div>
          <Input
            placeHolder={"Select a role (e.g Software Developer."}
            icon={<BiSearch />}
          />
        </div>
      </div>
      <div className="select-options-footer-input-section">
        <div>
          <Button style={{ width: "100%" }}>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Select;
