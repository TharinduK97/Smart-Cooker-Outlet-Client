import { get } from './apiService';

export const getOderList = async function () {
    return await get(`https://61fa979892093f0017ad9922.mockapi.io/Orders`);
  };