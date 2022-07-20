import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    fromRegister: false,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    fromRegister: (state, action) => {
      state.fromRegister = action.payload;
    },
  },
});

export const { logout, login, fromRegister } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectFromRegister = (state) => state.user.fromRegister;

export default userSlice.reducer;
