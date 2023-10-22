import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import modalReducer from "./slices/modals";
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    app: appReducer,
    modal: modalReducer,
  },
});
