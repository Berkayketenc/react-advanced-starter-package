import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "hello from store",
};

const oneSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { updateMessage } = oneSlice.actions;
export default oneSlice.reducer;
