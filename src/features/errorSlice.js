import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    notFound: false,
  },

  reducers: {
    notFound: (state, action) => {
      state.notFound = action.payload;
    },
  },
});

export const { notFound } = errorSlice.actions;

export const selectNotFound = (state) => state.error.notFound;

export default errorSlice.reducer;
