import React, { useEffect, useState } from "react";

import "./searchLayout.styles.css";
import SearchSidebar from "../../containers/SearchSidebar";

import CandidateInfo from "../../containers/CandidatesList";
import SearchHeader from "../../containers/SearchHeader";
import { useSelector, useDispatch } from "react-redux";
import { animated, useSpring } from "@react-spring/web";
import {
  updateSearchViewHeight,
  toggleSidebar,
} from "../../redux/slices/appSlice";
import { useDimentions } from "../../hooks/useDimensions";
import Overlay from "../../containers/Overlay";
const MainView = ({ searchSidebarHeight, modalAnimation, sideBarOpen }) => {
  return (
    <animated.div
      className={
        sideBarOpen
          ? "search-layout-sidebar-container"
          : "search-layout-sidebar-container-none"
      }
      style={{
        height: `${searchSidebarHeight}px`,
        overflowY: "scroll",
        width: modalAnimation.width,
      }}
    >
      <SearchSidebar />
    </animated.div>
  );
};

const SearchLayout = () => {
  const dispatch = useDispatch();
  const windowSize = useDimentions();
  const [sidebarWidth, setSidbarWidth] = useState(0);
  const [overlayEnabled, setOverLayEnnabled] = useState(false);
  const { searchSidebarHeight, searchViewHeight, sideBarOpen } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    if (windowSize.width >= 1024) {
      setSidbarWidth((windowSize.width / 100) * 25);
      setOverLayEnnabled(false);
    } else if (windowSize.width < 1024 && windowSize.width >= 768) {
      setSidbarWidth((windowSize.width / 100) * 60);
      setOverLayEnnabled(true);
    } else if (windowSize.width < 768) {
      setSidbarWidth(windowSize.width);
      setOverLayEnnabled(false);
    }
  }, [windowSize]);

  const modalAnimation = useSpring({
    width: sideBarOpen ? sidebarWidth : 0,
  });

  useEffect(() => {
    dispatch(updateSearchViewHeight(windowSize.height));
  }, [windowSize, dispatch]);

  function updateSearchBarVisibility() {
    dispatch(toggleSidebar());
  }

  return (
    <div className="search-layout-main-contianer">
      {overlayEnabled && sideBarOpen ? (
        <Overlay onClick={updateSearchBarVisibility}>
          <MainView
            searchSidebarHeight={searchSidebarHeight}
            modalAnimation={modalAnimation}
            sideBarOpen={sideBarOpen}
          />
        </Overlay>
      ) : (
        <MainView
          searchSidebarHeight={searchSidebarHeight}
          modalAnimation={modalAnimation}
          sideBarOpen={sideBarOpen}
        />
      )}
      <div
        className={
          sideBarOpen
            ? "search-layout-views-container"
            : "search-layout-views-container-full"
        }
      >
        <div>
          <SearchHeader />
        </div>
        <div style={{ height: `${searchViewHeight}px`, overflowY: "scroll" }}>
          <CandidateInfo />
        </div>
      </div>
    </div>
  );
};

export default SearchLayout;
