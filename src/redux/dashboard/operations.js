import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';

export function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const fetchGraph = createAsyncThunk(
  'user/graph-v2?period=365',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/user/graph-v2?period=365');
      setToken(thunkAPI.getState().auth.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
