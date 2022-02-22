import axios from "axios";
import { storage } from "./FireBase"
import { get } from './apiService';
import { getAccessToken } from "./localStorage";



export const getSingleProduct = async function (data:string) {
 
    return await get(`Product/${data}`);
  };

export const getProductList = async function () {
    return await get(`Product/GetAll`);
  };

export const addNewProduct = (data: object) => {
  let token =  getAccessToken();
   return axios({
        method: 'post',
        url: 'https://localhost:44362/Product',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        data: data
    });
        
}

