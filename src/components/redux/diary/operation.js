import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addDiaryProd = createAsyncThunk(
  'diary/addProduct',
  async (diaryProdDetails, thunkAPI) => {
    try {
      const response = await axios.post('/diary/product', diaryProdDetails);
      console.dir(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
