import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: [],
  crousalsData: [],
  searchHeaderHeight: 0,
  searchViewHeight: 0,
  searchSidebarHeight: 0,
  mainHeaderHeight: 0,
  crousalHeight: 0,
  sideBarData: [],
  sideBarOpen: true,
};

const appSettingSlice = createSlice({
  name: "App Slice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.crousalsData = action.payload;
    },
    toggleSidebar: (state) => {
      state.sideBarOpen = !state.sideBarOpen;
    },
    updateData: (state, action) => {
      state.crousalsData.forEach((data) =>
        data.name === action.payload
          ? (data.selected = true)
          : (data.selected = false)
      );
    },
    updateSearchSideBarHeight: (state, action) => {
      state.searchSidebarHeight = action.payload;
    },
    updateSearchHeaderHeight: (state, action) => {
      state.searchHeaderHeight = action.payload;
    },
    updateSearchViewHeight: (state, action) => {
      state.searchViewHeight =
        action.payload -
        state.searchHeaderHeight -
        state.crousalHeight -
        state.mainHeaderHeight;
    },
    updateMainHeaderHeight: (state, action) => {
      state.mainHeaderHeight = action.payload;
    },
    updateCrousalHeight: (state, action) => {
      state.crousalHeight = action.payload;
    },
    updateSearchSidebarData: (state, action) => {
      state.sideBarData = action.payload;
    },
    toggleFiler: (state, action) => {
      state.sideBarData.forEach((data) => {
        if (data.heading === action.payload.heading) {
          data.subHeading.forEach((sub) => {
            if (sub.name === action.payload.name) {
              sub.active = !sub.active;
            }
          });
        }
      });
    },
    editSearchSidebarData: (state, action) => {
      if (action.payload.value) {
        state.sideBarData.forEach((data) => {
          if (data.heading === action.payload.heading) {
            data.subHeading.forEach((sub) => {
              if (sub.name === action.payload.subHeading.name) {
                sub.tags
                  ? sub.tags.push({
                      title: action.payload.value,
                      id_: sub.tags.length + 1,
                    })
                  : (sub.tags = [
                      {
                        title: action.payload.value,
                        id_: sub.tags?.length ? sub.tags.length + 1 : 1,
                      },
                    ]);
                sub.opened = false;
              }
            });
          }
        });
      } else {
        if (action.payload.add === true) {
          state.sideBarData.forEach((data) => {
            if (data.heading === action.payload.heading) {
              data.subHeading.forEach((sub) => {
                if (sub.name === action.payload.subHeading.name) {
                  sub.opened = true;
                }
              });
            }
          });
        } else {
          state.sideBarData.forEach((data) => {
            if (data.heading === action.payload.heading) {
              data.subHeading.forEach((sub) => {
                if (sub.name === action.payload.subHeading.name) {
                  sub.opened = false;
                }
              });
            }
          });
        }
      }
    },
  },
});
export const {
  setData,
  updateData,
  updateSearchSideBarHeight,
  updateMainHeaderHeight,
  updateCrousalHeight,
  updateSearchSidebarData,
  editSearchSidebarData,
  toggleFiler,
  updateSearchHeaderHeight,
  updateSearchViewHeight,
  toggleSidebar,
} = appSettingSlice.actions;
export default appSettingSlice.reducer;
