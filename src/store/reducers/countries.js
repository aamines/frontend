import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {},
});

export const { searchCountries, addCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
