import { createSlice } from '@reduxjs/toolkit';
import { fetchGoals, addWater } from './operations';
import { fetchGoalsConfirm } from './operations';

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
      console.log(state.items.total.water.used);
    },
    [fetchGoals.rejected]: handleRejected,

    //addWater

    [addWater.pending]: handlePending,
    [addWater.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.total.water.used = action.payload.totalWater;
      console.log(action.payload.totalWater);
      console.log(state.items.total.water.used);
    },
    [addWater.rejected]: handleRejected,

    //addFood
    [fetchGoalsConfirm.pending]: handlePending,
    [fetchGoalsConfirm.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.total.breakfast = action.payload.breakfast;
      console.log(action.payload.breakfast);
      console.log(state.items.total.breakfast);
    },
    [fetchGoalsConfirm.rejected]: handleRejected,
  },
});

export const userGoalReducer = goalSlice.reducer;
