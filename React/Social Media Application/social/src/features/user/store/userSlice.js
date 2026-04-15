import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { profile: null, status: 'idle', error: null },
  reducers: {},
});

export default userSlice.reducer;
