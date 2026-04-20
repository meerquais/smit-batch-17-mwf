import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
