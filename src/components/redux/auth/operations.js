import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    console.dir(response.data);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.status);
  }
});
