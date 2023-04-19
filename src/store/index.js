import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//reducers
import groups from "./reducers/groups";
import memory from "./reducers/memory";
import persist from "./reducers/persist";
import countries from "./reducers/countries";
import milestones from "./reducers/milestones";
import achievements from "./reducers/achievements";
import CreateCommunity from "./reducers/community/create";

//reducers

const communityReducers = combineReducers({
  create: CreateCommunity,
});

const reducers = combineReducers({
  groups: groups,
  memory: memory,
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
    "memory",
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
