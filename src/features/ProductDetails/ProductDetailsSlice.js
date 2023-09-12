import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductDetails } from './ProductDetailsAPI';

const initialState = {
  productDetailsValue: {},
  status: 'idle',
};

export const fetchProductDetailsAsync = createAsyncThunk(
  'productDetails/fetchProductDetails',
  async ({ id, publisherName, subjectName, className }) => {
    // console.log(id, publisherName, subjectName, className)
    try {
      const response = await fetchProductDetails({ id, publisherName, subjectName, className });
      return response
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw error;
    }
  }
);

export const fetchProductDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetailsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductDetailsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.productDetailsValue = action.payload;
      });
  },
});

// export const { increment } = counterSlice.actions;


export const selectfetchProductDetails = (state) => state.productDetails.productDetailsValue;


export default fetchProductDetailsSlice.reducer;
