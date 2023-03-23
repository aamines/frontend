import { configureStore } from "@reduxjs/toolkit";

//reducers
import groups from "./reducers/groups";
import stories from "./reducers/stories";
import countries from "./reducers/countries";
import milestones from "./reducers/milestones";
import achievements from "./reducers/achievements";

const store = configureStore({
  reducer: {
    milestones: milestones,
    achievements: achievements,
    groups: groups,
    countries: countries,
    stories: stories,
  },
});

export default store;
