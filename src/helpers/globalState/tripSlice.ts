import { createSlice } from '@reduxjs/toolkit'
import { Trip } from '../types/Trip';

const tripMockup: Trip = {
  id: '81',
  destination: 'Paris',
  startAt: '2024-02-20',
  endAt: '2024-02-25',
};

interface tripSlice {
  allTrips: Trip[],
  selectedTrip: Trip | null,
}

const initialState: tripSlice = {
  allTrips: [],
  selectedTrip: tripMockup,
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.allTrips.push(action.payload);
    },
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
    },
    clearSelectedTrip: (state) => {
      state.selectedTrip = null;
    },
  },
});

export const { addTrip, setSelectedTrip, clearSelectedTrip } = tripSlice.actions;
export default tripSlice.reducer;
