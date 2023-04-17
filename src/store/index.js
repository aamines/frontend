import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//reducers
import groups from "./reducers/groups";
import stories from "./reducers/stories";
import persist from "./reducers/persist";
import countries from "./reducers/countries";
import milestones from "./reducers/milestones";
import achievements from "./reducers/achievements";
import persistStore from "redux-persist/es/persistStore";

//reducers
const reducers = combineReducers({
  milestones: milestones,
  achievements: achievements,
  groups: groups,
  countries: countries,
  stories: stories,
  persist: persist,
});

//persist configs
const persistConfig = {
  storage,
  key: "root",
  whitelist: ["persist"],
  blacklist: ["groups", "stories", "countries", "milestones", "achievements"],
};

//persist reducers
const persistedReducer = persistReducer(persistConfig, reducers);

//store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);
