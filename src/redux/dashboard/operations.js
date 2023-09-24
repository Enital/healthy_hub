// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';
// //goit-healthy-hub.onrender.com/api/user/graph-v2?period=31

// export function setHeadersToken(token) {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// }

// export const fetchGraph = createAsyncThunk(
//   'user/graph-v2?period=31',
//   async (_, thunkAPI) => {
//     try {
//       setHeadersToken(thunkAPI.getState().auth.token);
//       const response = await axios.get('/user/graph-v2?period=31');

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';
//goit-healthy-hub.onrender.com/api/user/graph-v2?period=31

export function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const fetchGraph = createAsyncThunk(
  'user/graph-v2?period=31',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/user/graph-v2?period=31');
      setToken(thunkAPI.getState().auth.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
