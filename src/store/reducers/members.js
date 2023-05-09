import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
  name: "memebers",
  initialState: [],
  reducers: {
    addMember: (state, action) => {
      state.push(action.payload);
    },
    removeMember: (state, action) => {
      return state.filter((member) => member.email !== action.payload);
    },
    removeAll: (state, action) => {
      return [];
    },
  },
});

export const { addMember, removeMember, removeAll } = membersSlice.actions;

export default membersSlice.reducer;
