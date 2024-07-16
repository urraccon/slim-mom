import { createSlice } from '@reduxjs/toolkit';
import { addDiaryProd } from './operation';

const initialState = {
  status: 'inactive',
  error: null,
  dailyRateCal: null,
  productList: {
    list: [],
    diaryList: [],
    restrictedList: [],
  },
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addDiaryProd.pending, (state, action) => {
        state.status = 'loading';
        state.error = 'null';
      })
      .addCase(addDiaryProd.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productList.diaryList.push(action.payload);
      })
      .addCase(addDiaryProd.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const diaryReducer = diarySlice.reducer;
