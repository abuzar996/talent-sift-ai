import React, { useEffect } from "react";

import "./searchLayout.styles.css";
import SearchSidebar from "../../containers/SearchSidebar";
import MenuLayout from "../menuLayout";
import CandidateInfo from "../../containers/CandidatesList";
import SearchHeader from "../../containers/SearchHeader";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchViewHeight } from "../../redux/slices/appSlice";
import { useDimentions } from "../../hooks/useDimensions";
const SearchLayout = () => {
  const dispatch = useDispatch();
  const windowSize = useDimentions();
  const { searchSidebarHeight, searchViewHeight } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    dispatch(updateSearchViewHeight(windowSize.height));
  }, [windowSize, dispatch]);

  return (
    <MenuLayout>
      <div className="search-layout-main-contianer">
        <div
          className="search-layout-sidebar-container"
          style={{ height: `${searchSidebarHeight}px`, overflowY: "scroll" }}
        >
          <SearchSidebar />
        </div>

        <div className="search-layout-views-container">
          <div>
            <SearchHeader />
          </div>
          <div style={{ height: `${searchViewHeight}px`, overflowY: "scroll" }}>
            <CandidateInfo />
          </div>
        </div>
      </div>
    </MenuLayout>
  );
};

export default SearchLayout;
