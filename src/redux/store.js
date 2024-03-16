import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiServices } from "./createApis";
import { combineReducers } from "redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "./authSlice";
import { persistConfig } from "./persist";

// Import your post API service object

// Define an array of API service objects
const services = apiServices;
console.log(services, "services");

// Initialize an empty object to store reducers
const reducers = { auth: authReducer };
const middlewares = [];

// Loop through each API service object and add its reducer to the reducers object
Object.entries(services).forEach(([key]) => {
  reducers[[services[key].reducerPath]] = services[key].reducer;
  middlewares.push(services[key]);
});

console.log(middlewares, "middlewares");

const rootReducers = combineReducers(reducers);

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Create a Redux store with preconfigured functionality
export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares.map((api) => api.middleware)), // Add middleware for handling API requests
});

// Optional: Set up listeners for RTK Query
// This is required for behaviors like refetchOnFocus and refetchOnReconnect
// setupListeners takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Create the persisted store
export const persist = persistStore(store);
