import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from '../services/authService';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

export const loginAsync = createAsyncThunk('auth/login', async ({ email, password }) => loginUser(email, password));
export const registerAsync = createAsyncThunk('auth/register', async ({ email, password, displayName }) => registerUser(email, password, displayName));
export const logoutAsync = createAsyncThunk('auth/logout', async () => logoutUser());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Login failed';
      })
      .addCase(registerAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Registration failed';
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.status = 'succeeded';
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
