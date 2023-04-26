import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//reducers
import groups from "./reducers/groups";
import persist from "./reducers/persist";
import memories from "./reducers/memories";
import countries from "./reducers/countries";
import milestones from "./reducers/milestones";
import achievements from "./reducers/achievements";
import createCommunity from "./reducers/community/create";
import community from "./reducers/community/data";

//reducers

const communityReducers = combineReducers({
  create: createCommunity,
  data: community,
});

const reducers = combineReducers({
  groups: groups,
  memories: memories,
  persist: persist,
  countries: countries,
  milestones: milestones,
  achievements: achievements,
  community: communityReducers,
});

//persist configs
const persistConfig = {
  storage,
  key: "root",
  blacklist: [
    "groups",
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
