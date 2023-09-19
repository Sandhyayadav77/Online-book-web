import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import publisherReducer from '../features/Product-list/ProductsListSlice';
import  particularPublicationReducer from '../features/ParticularPublication/ParticularPublicationSlice';
import  ClassForSubjectReducer from '../features/ByClass/ByClassSlice'
import fetchProductDetailsReducer from '../features/ProductDetails/ProductDetailsSlice'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/CartSlice'
import orderReducer from '../features/Order/orderSlice'
export const store = configureStore({
  reducer: {
    publisher: publisherReducer,
    particularPublication: particularPublicationReducer,   
    ClassForSubject: ClassForSubjectReducer,
    productDetails:fetchProductDetailsReducer,
    auth: authReducer,
    cart:cartReducer,
    order:orderReducer,
    middleware: [thunk]
  },
});
