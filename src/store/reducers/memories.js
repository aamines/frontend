import { createSlice } from "@reduxjs/toolkit";

const StoriesSlice = createSlice({
  name: "stories",
  initialState: { memories: [] },
  reducers: {
    addMemories: (state, action) => {
      state.memories = action.payload;
    },
  },
});

export const { addMemories } = StoriesSlice.actions;

export default StoriesSlice.reducer;
