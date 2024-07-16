import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loading/loadingReducer';
import { authReducer } from './auth/authSlice';
import { diaryReducer } from './diary/diarySlice';

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  diary: diaryReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
