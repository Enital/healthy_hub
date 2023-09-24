// import { createSlice } from '@reduxjs/toolkit';
// import { fetchGraph } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
// const handleFetchGraphFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// };

// const graphSlice = createSlice({
//   name: 'graph',
//   initialState: {
//     items: {},
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchGraph.pending, handlePending)
//       .addCase(fetchGraph.fulfilled, handleFetchGraphFulfilled)
//       .addCase(fetchGraph.rejected, handleRejected);
//   },
//   // extraReducers: {
//   //   [fetchGraph.pending]: handlePending,

//   //   [fetchGraph.fulfilled](state, action) {
//   //     state.isLoading = false;
//   //     state.error = null;
//   //     state.items = action.payload;
//   //   },
//   //   [fetchGraph.rejected]: handleRejected,
//   // },
// });

// export const graphReducer = graphSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchGraph } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFetchGraphFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const graphSlice = createSlice({
  name: 'graph',
  initialState: {
    graph: {}, //11.45
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGraph.pending, handlePending)
      .addCase(fetchGraph.fulfilled, handleFetchGraphFulfilled)
      .addCase(fetchGraph.rejected, handleRejected);
  },
});

export const graphReducer = graphSlice.reducer;
