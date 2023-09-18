import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = ' https://goit-healthy-hub.onrender.com/api/user';

export function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function unSetHeadersToken() {
  axios.defaults.headers.common.Authorization = ``;
}

export async function setFoodIntake(body) {
  const { data } = await axios.post('/food-intake', body);
  return data;
}

export const updateFoodOperations = createAsyncThunk(
  'user/foodUpdate',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);
      const data = await setFoodIntake(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export async function updateFoodApi(id, body) {
  const { data } = await axios.put(`/food-intake/${id}`, body);
  return data;
}

export const updateUserFoodOperation = createAsyncThunk(
  'user/update-food',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);

      const id = getState().user.id;
      const data = await updateFoodApi(id, body);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);