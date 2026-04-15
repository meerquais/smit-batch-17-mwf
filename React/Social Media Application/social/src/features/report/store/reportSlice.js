import { createSlice } from '@reduxjs/toolkit';

const reportSlice = createSlice({
  name: 'report',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
});

export default reportSlice.reducer;
