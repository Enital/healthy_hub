import { createSlice } from '@reduxjs/toolkit';
import { fetchGraph } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const graphSlice = createSlice({
  name: 'graph',
  initialState: {
    items: {},
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchGraph.pending]: handlePending,

    [fetchGraph.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      console.log(state.items.total.water.used);
    },
    [fetchGraph.rejected]: handleRejected,
  },
});

export const graphReducer = graphSlice.reducer;
