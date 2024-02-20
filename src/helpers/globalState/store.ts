import { configureStore } from '@reduxjs/toolkit';
import tripsReducer from './tripSlice';

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
