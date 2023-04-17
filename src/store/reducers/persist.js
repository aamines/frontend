import { createSlice } from "@reduxjs/toolkit";

const persistSlice = createSlice({
  name: "persist",
  initialState: {
    token: "",
    hasAccount: false,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
    },
    addHasAccount: (state, action) => {
      state.hasAccount = action.payload;
    },
  },
});

export const { addToken, addHasAccount, removeToken } = persistSlice.actions;

export default persistSlice.reducer;
