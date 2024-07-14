import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './operations';

const initialState = {
  status: 'inactive',
  error: null,
  loggedIn: false,
  user: {
    name: null,
    email: null,
  },
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
        state.loggedIn = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loggedIn = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.accessToken = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.loggedIn = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state, action) => {
        state.status = 'loading';
        state.loggedIn = false;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loggedIn = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.accessToken = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.loggedIn = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loggedIn = false;
        state.user.name = null;
        state.user.email = null;
        state.accessToken = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.loggedIn = false;
        state.user.name = null;
        state.user.email = null;
        state.accessToken = null;
      });
  },
});

export const authReducer = authSlice.reducer;
