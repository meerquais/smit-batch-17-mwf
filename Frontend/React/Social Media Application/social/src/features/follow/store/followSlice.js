import { createSlice } from '@reduxjs/toolkit';

const followSlice = createSlice({
  name: 'follow',
  initialState: { relationships: {}, status: 'idle', error: null },
  reducers: {},
});

export default followSlice.reducer;
