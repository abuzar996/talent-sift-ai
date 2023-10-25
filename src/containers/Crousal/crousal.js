import React, { useEffect, useState, useRef } from "react";
import "./crousal.styles.css";
import { useDimentions } from "../../hooks/useDimensions";
import { mainCrousalData } from "../../constants/mainCrousalData";
import { useDispatch, useSelector } from "react-redux";

import {
  setData,
  updateData,
  updateCrousalHeight,
} from "../../redux/slices/appSlice";
import { Select, FormControl, MenuItem } from "@mui/material";

const DataProvider = ({ icon, name, count, flex, selected }) => {
  return (
    <div
      className={
        flex
          ? selected
            ? "crousal-flex-items crousal-flex-padding crousal-selected"
            : "crousal-flex-items crousal-flex-padding"
          : "crousal-flex-items"
      }
    >
      <div
        className={
          flex && selected ? "crousel-icon-item-selected" : "crousel-icon-item"
        }
      >
        {icon}
      </div>
      <div
        className={
          flex && selected ? "crousel-name-item-selected" : "crousal_name_item"
        }
      >
        {name}
      </div>
      <div
        className={
          flex && selected
            ? "crousal-count-item-selected"
            : "crousal-count-item"
        }
      >
        ({count > 1000 ? `${(count / 1000).toFixed(1)}K` : count})
      </div>
    </div>
  );
};

const DropDownProvider = ({ selectedValue, handleChange, crousalData }) => {
  return (
    <FormControl>
      <Select
        value={selectedValue}
        onChange={(e) => handleChange(e)}
        sx={{ padding: "0", width: "200px", borderRadius: "10px" }}
      >
        {crousalData.length > 0 &&
          crousalData.map((data) => (
            <MenuItem key={data.id_} value={data.name}>
              <DataProvider {...data} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

const FlexDataProvider = ({ crousalData, onClick }) => {
  return (
    <>
      {crousalData.length > 0 &&
        crousalData.map((data) => (
          <div key={data.id_} onClick={() => onClick(data)}>
            <DataProvider flex={true} {...data} />
          </div>
        ))}
    </>
  );
};

const Crousal = () => {
  const dispatch = useDispatch();

  const { crousalsData, crousalHeight } = useSelector((state) => state.app);
  const [mobileView, setMobileView] = useState(false);

  const windowSize = useDimentions();
  const [selectedValue, setSelectedValue] = useState(mainCrousalData[0].name);

  const Ref = useRef();

  useEffect(() => {
    if (Ref.current.clientHeight !== crousalHeight) {
      dispatch(updateCrousalHeight(Ref.current.clientHeight));
    }
  }, [Ref, windowSize, dispatch, crousalHeight]);

  useEffect(() => {
    dispatch(setData(mainCrousalData));
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateData(selectedValue));
  }, [selectedValue, dispatch]);
  useEffect(() => {
    if (windowSize.width <= 600) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, [windowSize]);

  function handleChange(e) {
    setSelectedValue(() => e.target.value);
  }
  function onClick(data) {
    setSelectedValue(data.name);
  }
  return (
    <div ref={Ref} className="crousal-container">
      {mobileView ? (
        <DropDownProvider
          selectedValue={selectedValue}
          handleChange={handleChange}
          crousalData={crousalsData}
        />
      ) : (
        <FlexDataProvider onClick={onClick} crousalData={crousalsData} />
      )}
    </div>
  );
};

export default Crousal;
