import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
  name: "memebers",
  initialState: [{}],
  reducers: {
    addMember: (state, action) => {
      state.push(action.payload);
    },
    removeMember: (state, action) => {
      return state.filter((member) => member.id !== action.payload);
    },
  },
});

export const { addMember, removeMember } = membersSlice.actions;

export default membersSlice.reducer;
