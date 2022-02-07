import axios from "axios";
import { storage } from "./FireBase"
import { get } from './apiService';



export const getSingleProduct = async function (data:string) {
    return await get(`https://61fa979892093f0017ad9922.mockapi.io/product/${data}`);
  };

export const getProductList = async function () {
    return await get(`https://61fa979892093f0017ad9922.mockapi.io/product`);
  };

export const addNewProduct = (data: object) => {
    
   return axios({
        method: 'post',
        url: 'https://61fa979892093f0017ad9922.mockapi.io/product',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    });
        
}

