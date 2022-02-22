import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getProductList } from '../Services/Product';
import { RootState } from "../store"
import { IProduct } from './interface';

export interface IProductList {
    isLoadingProducts: boolean;
    productList?: IProduct[];
  }

  const initialState: IProductList = { isLoadingProducts: false , productList:[]};

  export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
      start: (state) => {
        return {
          ...state,
          isLoadingProducts: true,
        };
      },
      success: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          ...action.payload,
          isLoadingProducts: false,
        };
      },
      error: (state, action: PayloadAction<string>) => {
        return {
          ...state,
          isLoadingProducts: false,
        };
      },
    },
  });
  
  export const fetchProducts = () => async (dispatch: any) => {
    dispatch(start());
    try {
      const productLists = await getProductList();
      dispatch(success({productList : productLists.data}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error } = productListSlice.actions;
  export const selectProductLists = (state: RootState) => state.productlist;
  export const productListReducer = productListSlice.reducer;