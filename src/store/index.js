import { configureStore } from "@reduxjs/toolkit";

//reducers
import groups from "./reducers/groups";
import milestones from "./reducers/milestones";
import achievements from "./reducers/achievements";

const store = configureStore({
  reducer: {
    milestones: milestones,
    achievements: achievements,
    groups: groups,
  },
});

export default store;
