import { createSlice } from '@reduxjs/toolkit';
import { fetchGoals, addWater } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const goalSlice = createSlice({
  name: 'goals',
  initialState: {
    items: {},
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchGoals.pending]: handlePending,

    [fetchGoals.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchGoals.rejected]: handleRejected,

    //addWater

    [addWater.pending]: handlePending,
    [addWater.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.total.water.used = action.payload.water;
    },
    [addWater.rejected]: handleRejected,
  },
});

export const userGoalReducer = goalSlice.reducer;
