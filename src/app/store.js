import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Product-list/ProductsListSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
