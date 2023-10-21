import React, { useEffect } from "react";

import "./searchLayout.styles.css";
import SearchSidebar from "../../containers/SearchSidebar";
import MenuLayout from "../menuLayout";
import CandidateInfo from "../../containers/CandidatesList";
import SearchHeader from "../../containers/SearchHeader";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchViewHeight } from "../../redux/slices/appSlice";
import { useDimentions } from "../../hooks/useDimensions";
import Overlay from "../../containers/Overlay";

const MainView = ({ searchViewHeight }) => {
  return (
    <Overlay>
      <div>
        <SearchHeader />
      </div>
      <div
        style={{
          height: `${searchViewHeight}px`,
          overflowY: "scroll",
        }}
      >
        <CandidateInfo />
      </div>
    </Overlay>
  );
};

const SearchLayout = () => {
  const dispatch = useDispatch();
  const windowSize = useDimentions();
  const { searchSidebarHeight, searchViewHeight, sideBarOpen } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    dispatch(updateSearchViewHeight(windowSize.height));
  }, [windowSize, dispatch]);

  return (
    <MenuLayout>
      <div className="search-layout-main-contianer">
        <div
          className={
            sideBarOpen
              ? "search-layout-sidebar-container"
              : "search-layout-sidebar-container-none"
          }
          style={{ height: `${searchSidebarHeight}px`, overflowY: "scroll" }}
        >
          <SearchSidebar />
        </div>

        <div
          className={
            sideBarOpen
              ? "search-layout-views-container"
              : "search-layout-views-container-full"
          }
        >
          {/* <MainView searchViewHeight={searchViewHeight} /> */}
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
