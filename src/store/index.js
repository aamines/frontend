import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//reducers
import groups from "./reducers/groups";
import persist from "./reducers/persist";
import variants from "./reducers/variants";
import memories from "./reducers/memories";
import countries from "./reducers/countries";
import milestones from "./reducers/milestones";
import membersReducer from "./reducers/members";
import community from "./reducers/community/data";
import achievements from "./reducers/achievements";
import createCommunity from "./reducers/community/create";

//reducers

const communityReducers = combineReducers({
  create: createCommunity,
  data: community,
});

const reducers = combineReducers({
  groups: groups,
  persist: persist,
  memories: memories,
  variants: variants,
  countries: countries,
  milestones: milestones,
  members: membersReducer,
  achievements: achievements,
  community: communityReducers,
});

//persist configs
const persistConfig = {
  storage,
  key: "root",
  blacklist: [
    "groups",
    "members",
    "variants",
    "memories",
    "community",
    "countries",
    "milestones",
    "achievements",
  ],
  whitelist: ["persist"],
};

//persist reducers
const persistedReducer = persistReducer(persistConfig, reducers);

//customized middleware
const customizedMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  });

//store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
