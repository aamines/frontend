import { createSlice } from "@reduxjs/toolkit";

const createCommunity = createSlice({
  name: "createCommunity",
  initialState: {
    name: "",
    type: "",
    vision: "",
  },
  reducers: {
    setData: (state, action) => {
      state.name = action.payload.name;
      state.type = action.payload.type;
      state.vision = action.payload.vision;
    },
  },
});

export const { setData } = createCommunity.actions;

export default createCommunity.reducer;
