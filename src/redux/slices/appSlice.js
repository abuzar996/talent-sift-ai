import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: [],
  crousalsData: [],
  searchSidebarHeight: 0,
  mainHeaderHeight: 0,
  crousalHeight: 0,
};

const appSettingSlice = createSlice({
  name: "App Slice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.crousalsData = action.payload;
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
    updateMainHeaderHeight: (state, action) => {
      state.mainHeaderHeight = action.payload;
    },
    updateCrousalHeight: (state, action) => {
      state.crousalHeight = action.payload;
    },
  },
});
export const {
  setData,
  updateData,
  updateSearchSideBarHeight,
  updateMainHeaderHeight,
  updateCrousalHeight,
} = appSettingSlice.actions;
export default appSettingSlice.reducer;
