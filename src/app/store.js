import { configureStore } from '@reduxjs/toolkit';
import publisherReducer from '../features/Product-list/ProductsListSlice';
import  particularPublicationReducer from '../features/ParticularPublication/ParticularPublicationSlice';
import  ClassForSubjectReducer from '../features/ByClass/ByClassSlice'
import fetchProductDetailsReducer from '../features/ProductDetails/ProductDetailsSlice'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/CartSlice'
export const store = configureStore({
  reducer: {
    publisher: publisherReducer,
    particularPublication: particularPublicationReducer,   
    ClassForSubject: ClassForSubjectReducer,
    productDetails:fetchProductDetailsReducer,
    auth: authReducer,
    cart:cartReducer
  },
});
