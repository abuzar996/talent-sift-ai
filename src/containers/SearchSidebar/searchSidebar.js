import React, { useEffect } from "react";
import "./searchSidebar.styles.css";
import Heading from "./Sections/Headings/heading";
import { searchSideData } from "../../constants/searchSidebar";
import { useDimentions } from "../../hooks/useDimensions";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSearchSideBarHeight,
  updateSearchSidebarData,
} from "../../redux/slices/appSlice";
const SearchSidebar = () => {
  const dispatch = useDispatch();

  const { mainHeaderHeight, crousalHeight, sideBarData } = useSelector(
    (state) => state.app
  );

  const windowSize = useDimentions();

  useEffect(() => {
    dispatch(updateSearchSidebarData(searchSideData));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      updateSearchSideBarHeight(
        window.innerHeight - (crousalHeight + mainHeaderHeight)
      )
    );
  }, [windowSize, crousalHeight, mainHeaderHeight, dispatch]);

  return (
    <div className="search-side-bar-main-container">
      {sideBarData.length > 0 &&
        sideBarData.map((data) => <Heading key={data.id_} {...data} />)}
    </div>
  );
};

export default SearchSidebar;
