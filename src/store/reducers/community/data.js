import { createSlice } from "@reduxjs/toolkit";

const community = createSlice({
  name: "community",
  initialState: {
    community: null,
  },
  reducers: {
    setData: (state, action) => {
      state.community = action.payload;
    },
  },
});

export const { setData } = community.actions;

export default community.reducer;
