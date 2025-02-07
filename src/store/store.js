import { configureStore } from "@reduxjs/toolkit";
import oneSliceReducer from "./slices/oneSlice.js/oneSlice";

const store = configureStore({
  reducer: {
    app: oneSliceReducer,
  },
});

export default store;
