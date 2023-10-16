import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: [],
  crousalsData: [],
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
  },
});
export const { setData, updateData } = appSettingSlice.actions;
export default appSettingSlice.reducer;
