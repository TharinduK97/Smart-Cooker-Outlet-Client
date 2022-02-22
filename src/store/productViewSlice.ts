import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getProductList, getSingleProduct } from '../Services/Product';
import { RootState } from "."
import { IProduct } from './interface';

export interface IProducts {
    isLoadingProducts: boolean;
    product?: IProduct;
  }

  const initialState: IProducts = { isLoadingProducts: false , product:{
  
    id: "",
    productName: "",
    description:"",
    price: 0,
    quantity: 0,
    imageUrl:""
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
   
    try {
      const product = await getSingleProduct(id);
      
      dispatch(success({product : product.data}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error } = productViewSlice.actions;
  export const selectProduct = (state: RootState) => state.product;
  export const productViewReducer = productViewSlice.reducer;