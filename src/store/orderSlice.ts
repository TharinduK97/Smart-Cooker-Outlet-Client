import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getOderList } from '../Services/orderService';
import { RootState } from "../store"
import { IOrder } from './interface';

export interface IOrderList {
    isLoadingOrders: boolean;
    orderList?: IOrder[];
  }

  const initialState: IOrderList = { isLoadingOrders: false , orderList:[]};

  export const orderListSlice = createSlice({
    name: 'orderList',
    initialState,
    reducers: {
      start: (state) => {
        return {
          ...state,
          isLoadingOrders: true,
        };
      },
      success: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          ...action.payload,
          isLoadingOrders: false,
        };
      },
      error: (state, action: PayloadAction<string>) => {
        return {
          ...state,
          isLoadingOrders: false,
        };
      },
    },
  });
  
  export const fetchOrders = () => async (dispatch: any) => {
      
    dispatch(start());
    try {
      const orderLists = await getOderList();
      console.log(orderLists);
      dispatch(success({orderList : orderLists}));
      
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error } = orderListSlice.actions;
  export const selectOrderLists = (state: RootState) => state.order;
  export const orderListReducer = orderListSlice.reducer;