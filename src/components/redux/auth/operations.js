import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (loginDetails, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', loginDetails);
      console.dir(response.data);
      // const accessToken = response.data.token;

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (registerDetails, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', registerDetails);
      console.dir(response.data);
      // const accesToken = response.data.token;

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    console.dir(response.data);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.status);
  }
});
