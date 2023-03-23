import { createSlice } from "@reduxjs/toolkit";

//images
import face from "../../assets/face.jpg";
import landscape from "../../assets/landscape.jpeg";
import landscape1 from "../../assets/landscape1.jpeg";
import landscape2 from "../../assets/landscape2.jpeg";
import landscape3 from "../../assets/landscape3.jpeg";
import landscape4 from "../../assets/landscape4.jpeg";

const StoriesSlice = createSlice({
  name: "stories",
  initialState: [
    {
      id: 1,
      image: face,
      name: "alice",
      status: "seen",
    },
    {
      id: 2,
      image: landscape1,
      name: "happy",
      status: "seen",
    },
    {
      id: 3,
      image: landscape2,
      name: "acele",
      status: "new",
    },
    {
      id: 4,
      image: landscape3,
      name: "olga",
      status: "new",
    },
    {
      id: 5,
      image: landscape4,
      name: "linda",
      status: "new",
    },
    {
      id: 6,
      image: face,
      name: "Saad",
      status: "new",
    },
    {
      id: 1,
      image: landscape,
      name: "alice",
      status: "seen",
    },
    {
      id: 2,
      image: landscape1,
      name: "happy",
      status: "seen",
    },
    {
      id: 3,
      image: landscape2,
      name: "acele",
      status: "new",
    },
    {
      id: 4,
      image: landscape3,
      name: "olga",
      status: "new",
    },
    {
      id: 5,
      image: landscape4,
      name: "linda",
      status: "new",
    },
    {
      id: 6,
      image: face,
      name: "Saad",
      status: "new",
    },
    {
      id: 1,
      image: landscape,
      name: "alice",
      status: "seen",
    },
    {
      id: 2,
      image: landscape1,
      name: "happy",
      status: "seen",
    },
    {
      id: 3,
      image: landscape2,
      name: "acele",
      status: "new",
    },
    {
      id: 4,
      image: landscape3,
      name: "olga",
      status: "new",
    },
    {
      id: 5,
      image: landscape4,
      name: "linda",
      status: "new",
    },
    {
      id: 6,
      image: face,
      name: "Saad",
      status: "new",
    },
    {
      id: 1,
      image: landscape,
      name: "alice",
      status: "seen",
    },
    {
      id: 2,
      image: landscape1,
      name: "happy",
      status: "seen",
    },
    {
      id: 3,
      image: landscape2,
      name: "acele",
      status: "new",
    },
    {
      id: 4,
      image: landscape3,
      name: "olga",
      status: "new",
    },
    {
      id: 5,
      image: landscape4,
      name: "linda",
      status: "new",
    },
    {
      id: 6,
      image: face,
      name: "Saad",
      status: "new",
    },
  ],
  reducers: {},
});

export default StoriesSlice.reducer;
