import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loading/loadingReducer';
import { authReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
