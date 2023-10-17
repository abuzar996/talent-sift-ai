import React, { useEffect } from "react";
import Heading from "./Sections/Headings/heading";
import { searchSideData } from "../../constants/searchSidebar";
import { useDimentions } from "../../hooks/useDimensions";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchSideBarHeight } from "../../redux/slices/appSlice";
const SearchSidebar = () => {
  const dispatch = useDispatch();
  const { mainHeaderHeight, crousalHeight, searchSidebarHeight } = useSelector(
    (state) => state.app
  );

  const windowSize = useDimentions();

  useEffect(() => {
    dispatch(
      updateSearchSideBarHeight(
        window.screen.height - (crousalHeight + mainHeaderHeight)
      )
    );
  }, [windowSize, crousalHeight, mainHeaderHeight, dispatch]);
  let heigthToAdd = searchSidebarHeight.toString() + "px";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: heigthToAdd,
        overflowY: "scroll",
      }}
    >
      {searchSideData.length > 0 &&
        searchSideData.map((data) => <Heading key={data.id_} {...data} />)}
    </div>
  );
};

export default SearchSidebar;
