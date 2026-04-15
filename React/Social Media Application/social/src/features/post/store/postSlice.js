import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
});

export default postSlice.reducer;
