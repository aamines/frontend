import { createSlice } from "@reduxjs/toolkit";

const variantsSlice = createSlice({
  name: "variants",
  initialState: {
    initial: {
      opacity: 0.2,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.15,
      },
    },
    exit: {
      opacity: 0.2,
      transition: {
        duration: 0.15,
      },
    },
  },
  reducers: {},
});

export default variantsSlice.reducer;
