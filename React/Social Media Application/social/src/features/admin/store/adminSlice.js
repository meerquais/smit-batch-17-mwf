import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: { users: [], posts: [], reports: [], status: 'idle', error: null },
  reducers: {},
});

export default adminSlice.reducer;
