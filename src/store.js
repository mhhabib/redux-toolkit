import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/ProfileSlice';
import configReducer from './slices/ConfigSlice'; // New reducer for config page

const store = configureStore({
  reducer: {
    profile: profileReducer,
    config: configReducer, // Add config reducer to the store
  },
});

export default store;