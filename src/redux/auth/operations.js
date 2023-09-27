import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';
const path = '/auth';

function showError(error) {
  Notify.failure(error.response.data.message);
}

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// POST /auth/register Create a new user
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`${path}/register`, credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      // console.log(error);
      showError(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST ​/auth​/login Login user
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`${path}/login`, credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      showError(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST ​/auth​/logout Log out user
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`${path}/logout`);
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    showError(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// GET /auth/current Get information about the current user
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get(`${path}/current`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkingRegistered = createAsyncThunk(
  'auth/checking-registered',
  async (body, thunkAPI) => {
    try {
      const res = await axios.post(`${path}/checking-registered`, body);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// updateWeight
export const updateWeight = createAsyncThunk(
  'user/updateWeight',
  async (inputWeight, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      const response = await axios.put('/user/weight', { weight: inputWeight });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// updateGoalAuth
export const updateGoalAuth = createAsyncThunk(
  'user/updateGoal',
  async (selectedGoal, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      const response = await axios.patch('/user/goal', { goal: selectedGoal });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// updateUser
export const updateUser = createAsyncThunk(
  'auth/settings',
  async (formData, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      const response = await axios.patch('/auth/settings', formData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// updateAvatar
export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (formFile, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      const response = await axios.patch('/auth/avatar', formFile);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
