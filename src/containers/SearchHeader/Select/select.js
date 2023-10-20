import React, { useState } from "react";
import "./select.styles.css";
import Select from "react-select";
const CustomSelect = (onChange) => {
  const [options] = useState([
    {
      value: "List View",
      label: `List View`,
    },
    {
      value: "Location View",
      label: "Location View",
    },
    {
      value: "Analytics View",
      label: "Analytics View",
    },
    {
      value: "Stats View",
      label: "Stats View",
    },
    {
      value: "Company View",
      label: "Company View",
    },
  ]);
  return (
    <Select
      styles={{ display: "flex" }}
      options={options}
      defaultValue={options[0]}
      onChange={onChange}
    />
  );
};

export default CustomSelect;
