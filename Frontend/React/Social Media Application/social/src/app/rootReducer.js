import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api';
import authReducer from '../features/auth/store/authSlice';
import userReducer from '../features/user/store/userSlice';
import postReducer from '../features/post/store/postSlice';
import followReducer from '../features/follow/store/followSlice';
import reportReducer from '../features/report/store/reportSlice';
import adminReducer from '../features/admin/store/adminSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  follow: followReducer,
  report: reportReducer,
  admin: adminReducer,
});

export default rootReducer;
