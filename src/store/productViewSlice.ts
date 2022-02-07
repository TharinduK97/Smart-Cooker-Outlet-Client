import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getProductList, getSingleProduct } from '../Services/Product';
import { RootState } from "."
import { IProduct } from './interface';

export interface IProducts {
    isLoadingProducts: boolean;
    product?: IProduct;
  }

  const initialState: IProducts = { isLoadingProducts: false , product:{
    product_code: 0,
    product_name: "",
    price: 0,
    quantity: 0,
    last_updated: "",
    productDescription:"",
    productImage:""
  } };

  export const productViewSlice = createSlice({
    name: 'product',
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
  
  export const fetchSingleProduct = (id:string) => async (dispatch: any) => {
    dispatch(start());
    // console.log(id)
    try {
      const product = await getSingleProduct(id);
      // console.log(product)
      dispatch(success({product : product}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error } = productViewSlice.actions;
  export const selectProduct = (state: RootState) => state.product;
  export const productViewReducer = productViewSlice.reducer;