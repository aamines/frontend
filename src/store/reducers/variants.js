import { createSlice } from "@reduxjs/toolkit";

const variantsSlice = createSlice({
  name: "variants",
  initialState: {
    page: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          type: "tween",
          ease: "easeIn",
          duration: 0.1,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          type: "tween",
          duration: 0.1,
        },
      },
    },
    items: {
      initial: {
        y: 8,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          ease: "easeIn",
          delay: 0.5,
          duration: 0.5,
          staggerChildren: 0.5,
        },
      },
    },
    modal: {
      initial: {
        scale: 0.3,
        opacity: 0,
      },
      animate: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
        },
      },
    },
  },
  reducers: {},
});

export default variantsSlice.reducer;
