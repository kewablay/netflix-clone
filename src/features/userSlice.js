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
    fromRegister: (state) => {
      state.fromRegister = true;
    },
  },
});

export const { logout, login, fromRegister } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectFromRegister = (state) => state.user.fromRegisteryy;

export default userSlice.reducer;
