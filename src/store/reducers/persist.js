import { createSlice } from "@reduxjs/toolkit";

const persistSlice = createSlice({
  name: "persist",
  initialState: {
    token: "",
    account: null,
    hasAccount: false,
    authenticated: false,
    tokenVerified: false,
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
    setTokenVerified: (state, action) => {
      state.tokenVerified = action.payload;
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
  setAccount,
  removeToken,
  removeAccount,
  setHasAccount,
  setTokenVerified,
  setAuthenticated,
} = persistSlice.actions;

export default persistSlice.reducer;
