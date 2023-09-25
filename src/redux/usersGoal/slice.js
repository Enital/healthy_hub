import { createSlice } from '@reduxjs/toolkit';
import {
  UpdateFood,
  addWater,
  fetchGoals,
  fetchGoalsConfirm,
  updateGoal,
} from './operations';

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
const handleUpdateGoalFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.total.water.goal = action.payload.total.water.goal;
  state.items.total.calories.goal = action.payload.total.calories.goal;
  state.items.total.carbohydrates.goal =
    action.payload.total.carbohydrates.goal;
  state.items.total.protein.goal = action.payload.total.protein.goal;
  state.items.total.fat.goal = action.payload.total.fat.goal;
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
  // array of nutrients
  state.items.breakfastDishes = action.payload.breakfastDishes;
  state.items.lunchDishes = action.payload.lunchDishes;
  state.items.dinnerDishes = action.payload.dinnerDishes;
  state.items.snackDishes = action.payload.snackDishes;
};
const handleAddWaterFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.total.water.used = action.payload.totalWater;
};
const handleUpdateFoodFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  state.items.breakfast = action.payload.breakfast;
  state.items.lunch = action.payload.lunch;
  state.items.dinner = action.payload.dinner;
  state.items.snack = action.payload.snack;

  state.items.breakfastDishes = action.payload.breakfastDishes;
  state.items.lunchDishes = action.payload.lunchDishes;
  state.items.dinnerDishes = action.payload.dinnerDishes;
  state.items.snackDishes = action.payload.snackDishes;

  state.items.total.water.goal = action.payload.total.water.goal;
  state.items.total.calories.goal = action.payload.total.calories.goal;
  state.items.total.carbohydrates.goal =
    action.payload.total.carbohydrates.goal;
  state.items.total.protein.goal = action.payload.total.protein.goal;
  state.items.total.fat.goal = action.payload.total.fat.goal;

  state.items.total.water.used = action.payload.total.water.used;
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
      .addCase(fetchGoalsConfirm.rejected, handleRejected)
      // updateGoal
      .addCase(updateGoal.pending, handlePending)
      .addCase(updateGoal.fulfilled, handleUpdateGoalFulfilled)
      .addCase(updateGoal.rejected, handleRejected)
      // updateFood
      .addCase(UpdateFood.pending, handlePending)
      .addCase(UpdateFood.fulfilled, handleUpdateFoodFulfilled)
      .addCase(UpdateFood.rejected, handleRejected);
  },
});

export const userGoalReducer = goalSlice.reducer;
