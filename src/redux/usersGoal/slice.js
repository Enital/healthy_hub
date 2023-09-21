// import { createSlice } from '@reduxjs/toolkit';
// import { fetchGoals, addWater } from './operations';
// import { fetchGoalsConfirm } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const goalSlice = createSlice({
//   name: 'goals',
//   initialState: {
//     items: {},
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: {
//     [fetchGoals.pending]: handlePending,

//     [fetchGoals.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//       console.log(state.items.total.water.used);
//     },
//     [fetchGoals.rejected]: handleRejected,

//     //addWater

//     [addWater.pending]: handlePending,
//     [addWater.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.total.water.used = action.payload.totalWater;
//       console.log(action.payload.totalWater);
//       console.log(state.items.total.water.used);
//     },
//     [addWater.rejected]: handleRejected,

//     //addFood
//     [fetchGoalsConfirm.pending]: handlePending,
//     [fetchGoalsConfirm.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.total.breakfast = action.payload.breakfast;
//       console.log(action.payload.breakfast);
//       console.log(state.items.total.breakfast);
//     },
//     [fetchGoalsConfirm.rejected]: handleRejected,
//   },
// });

// export const userGoalReducer = goalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { addWater, fetchGoals, fetchGoalsConfirm } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFetchGoalsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const handleAddWaterFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.total.water.used = action.payload.totalWater;
};
const handleFetchGoalsConfirmFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.breakfast = action.payload.breakfast;
  state.items.lunch = action.payload.lunch;
  state.items.dinner = action.payload.dinner;
  state.items.snack = action.payload.snack;
  // total nutrients
  state.items.total.calories.used = action.payload.total.calories.used;
  state.items.total.carbohydrates.used =
    action.payload.total.carbohydrates.used;
  state.items.total.protein.used = action.payload.total.protein.used;
  state.items.total.fat.used = action.payload.total.fat.used;
};

const goalSlice = createSlice({
  name: 'goals',
  initialState: {
    items: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGoals.pending, handlePending)
      .addCase(fetchGoals.fulfilled, handleFetchGoalsFulfilled)
      .addCase(fetchGoals.rejected, handleRejected)
      //addWater
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, handleAddWaterFulfilled)
      .addCase(addWater.rejected, handleRejected)
      //addFood
      .addCase(fetchGoalsConfirm.pending, handlePending)
      .addCase(fetchGoalsConfirm.fulfilled, handleFetchGoalsConfirmFulfilled)
      .addCase(fetchGoalsConfirm.rejected, handleRejected);
  },
});

export const userGoalReducer = goalSlice.reducer;
