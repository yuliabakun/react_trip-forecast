import { createSlice } from '@reduxjs/toolkit'
import { Trip } from '../types/Trip';

interface tripSlice {
  mockTrip: Trip,
  selectedTrip: Trip | null,
  searchQuery: string,
}

const initialState: tripSlice = {
  mockTrip: {
    id: '1',
    destination: 'Paris',
    startAt: '2024-02-20',
    endAt: '2024-02-25',
  },
  selectedTrip: {
    id: '1',
    destination: 'Paris',
    startAt: '2024-02-20',
    endAt: '2024-02-25',
  },
  searchQuery: '',
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
    },
    clearSelectedTrip: (state) => {
      state.selectedTrip = null;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSelectedTrip, clearSelectedTrip, setSearchQuery } = tripSlice.actions;
export default tripSlice.reducer;
