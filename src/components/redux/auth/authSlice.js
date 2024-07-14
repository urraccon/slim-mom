import { createSlice } from '@reduxjs/toolkit';
import { logout } from './operations';

const initialState = {
  status: 'inactive',
  error: null,
  loggedIn: false,
  user: {
    name: null,
    email: null,
    accessToken: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logout.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loggedIn = false;
        state.user.name = null;
        state.user.email = null;
        state.user.accessToken = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.loggedIn = false;
        state.user.name = null;
        state.user.email = null;
        state.user.accessToken = null;
      });
  },
});

export const authReducer = authSlice.reducer;
