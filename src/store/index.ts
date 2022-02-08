import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './loginSlice';
import { orderListReducer } from './orderSlice';
import { productListReducer } from './productSlice';
import { productViewReducer } from './productViewSlice';

 

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    productlist: productListReducer,
    product: productViewReducer,
    order: orderListReducer
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;