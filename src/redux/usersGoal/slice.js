import { createSlice } from '@reduxjs/toolkit';
import { fetchGoals } from './operations';

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

    // addContact

    // [addContact.pending]: handlePending,
    // [addContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts.push(action.payload);
    // },
    // [addContact.rejected]: handleRejected,
  },
});

export const userGoalReducer = goalSlice.reducer;
