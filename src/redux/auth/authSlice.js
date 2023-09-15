import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  handleFulfilledLogOut,
  handleFulfilledPost,
  handleRefreshingFalse,
  handleRefreshingFull,
  handleRefreshingTrue,
} from './sliceFunction';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilledPost)
      .addCase(logIn.fulfilled, handleFulfilledPost)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.pending, handleRefreshingTrue)
      .addCase(refreshUser.fulfilled, handleRefreshingFull)
      .addCase(refreshUser.rejected, handleRefreshingFalse);
  },
});

export const authReducer = authSlice.reducer;
