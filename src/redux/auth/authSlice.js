import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateWeight,
  updateGoalAuth,
  updateUser,
} from './operations';
import {
  handlePending,
  handleRejected,
  handleUpdateWeightFulfilled,
  handleUpdateGoalAuthFulfilled,
  handleFulfilledLogOut,
  handleFulfilledPost,
  handleRefreshingFalse,
  handleRefreshingFull,
  handleRefreshingTrue,
  handleUpdateUserFulfilled,
} from './sliceFunction';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilledPost)
      .addCase(logIn.fulfilled, handleFulfilledPost)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.pending, handleRefreshingTrue)
      .addCase(refreshUser.fulfilled, handleRefreshingFull)
      .addCase(refreshUser.rejected, handleRefreshingFalse)
      // updateWeight
      .addCase(updateWeight.pending, handlePending)
      .addCase(updateWeight.fulfilled, handleUpdateWeightFulfilled)
      .addCase(updateWeight.rejected, handleRejected)
      // updateGoalAuth
      .addCase(updateGoalAuth.pending, handlePending)
      .addCase(updateGoalAuth.fulfilled, handleUpdateGoalAuthFulfilled)
      .addCase(updateGoalAuth.rejected, handleRejected)
      // updateGoalAuth
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, handleUpdateUserFulfilled)
      .addCase(updateUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
