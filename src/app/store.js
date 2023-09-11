import { configureStore } from '@reduxjs/toolkit';
import publisherReducer from '../features/Product-list/ProductsListSlice';
import  particularPublicationReducer from '../features/ParticularPublication/ParticularPublicationSlice';
import  ClassForSubjectReducer from '../features/ByClass/ByClassSlice'

export const store = configureStore({
  reducer: {
    publisher: publisherReducer,
    particularPublication: particularPublicationReducer,   
    ClassForSubject: ClassForSubjectReducer,
  },
});
