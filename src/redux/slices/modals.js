import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  infoModalOpen: false,
  imageWidth: 0,
  buttonWidth: 0,
  candidateWidth: 0,
  detailWidth: 0,
  sourceWidth: 0,
  matchWidth: 0,
  dateWidth: 0,
};

const appSettingSlice = createSlice({
  name: "Modal Slice",
  initialState,
  reducers: {
    toggleInfoModal: (state) => {
      state.infoModalOpen = !state.infoModalOpen;
    },
    setImageWidth: (state, action) => {
      state.imageWidth = action.payload;
    },
    setCandidateWidth: (state, action) => {
      state.candidateWidth = action.payload;
    },
    setSourceWidth: (state, action) => {
      state.sourceWidth = action.payload;
    },
    setDetailWidth: (state, action) => {
      state.detailWidth = action.payload;
    },
    setMatchWidth: (state, action) => {
      state.matchWidth = action.payload;
    },
    setDateWidth: (state, action) => {
      state.dateWidth = action.payload;
    },
    setButtonWidth: (state, action) => {
      state.buttonWidth = action.payload;
    },
  },
});
export const {
  toggleInfoModal,
  setButtonWidth,
  setDateWidth,
  setMatchWidth,
  setDetailWidth,
  setSourceWidth,
  setCandidateWidth,
  setImageWidth,
} = appSettingSlice.actions;
export default appSettingSlice.reducer;
