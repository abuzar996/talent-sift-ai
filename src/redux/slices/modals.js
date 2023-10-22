import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  infoModalOpen: false,
};

const appSettingSlice = createSlice({
  name: "Modal Slice",
  initialState,
  reducers: {
    toggleInfoModal: (state) => {
      state.infoModalOpen = !state.infoModalOpen;
    },
  },
});
export const { toggleInfoModal } = appSettingSlice.actions;
export default appSettingSlice.reducer;
