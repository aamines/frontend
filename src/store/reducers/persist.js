import { createSlice } from "@reduxjs/toolkit";

const persistSlice = createSlice({
  name: "persist",
  initialState: {
    token: "",
    account: null,
    hasAccount: false,
    authenticated: false,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
    },
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    removeAccount: (state) => {
      state.account = null;
    },
    setHasAccount: (state, action) => {
      state.hasAccount = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
  },
});

export const {
  addToken,
  setHasAccount,
  removeToken,
  setAuthenticated,
  setAccount,
  removeAccount,
} = persistSlice.actions;

export default persistSlice.reducer;
