import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllPublsihers } from './ProductsListAPI';

const initialState = {
  publishers: [],
  status: 'idle',
};
export const fetchAllPublsihersAsync = createAsyncThunk(
  'publisher/fetchAllPublishers',
  async () => {
    const response = await fetchAllPublsihers()
    // console.log(response)
    return response;

  }
);


export const publisherSlice = createSlice({
  name: 'publisher',
  initialState,

  reducers: {  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPublsihersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllPublsihersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.publishers = action.payload.data;
      });
  },
});

export const { increment } = publisherSlice.actions;

export const selectAllPublishers = (state) => state.publisher.publishers;

export default publisherSlice.reducer;
