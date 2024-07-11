import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingReducer from './reducers/loadingReducer';
import modalReducer from './reducers/modalReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  modal: modalReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
