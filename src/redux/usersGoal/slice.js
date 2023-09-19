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
      state.items.total.water.used = action.payload.water;
      console.log(action.payload.water);
      console.log(state.items.total.water.used);
    },
    [addWater.rejected]: handleRejected,

    //addFood
    [fetchGoalsConfirm.pending]: handlePending,
    [fetchGoalsConfirm.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.total.food.used = action.payload.food;
      console.log(action.payload.food);
      console.log(state.items.total.food.used);
    },
    [fetchGoalsConfirm.rejected]: handleRejected,
  },
});

export const userGoalReducer = goalSlice.reducer;
