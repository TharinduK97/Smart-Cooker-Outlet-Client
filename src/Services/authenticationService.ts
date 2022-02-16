import { getAccessToken, getRole } from './localStorage';
import { loginpost,get } from './apiService';

export interface AuthPayload {
  username: string;
  password: string;
}

export const authenticate = async (data: AuthPayload) => {

  return await loginpost(`Auth/StaffLogin`, data);

};

export const userCred = async () => {

  return await get(`Staff`);

};

export const isAuthenticated = (): boolean => {
  return getAccessToken() ? true : false;
};

export const isUserInventory = (): boolean => {
  return getRole() == "Inventory" ? true : false;
};

export const isUserSales = (): boolean => {
  return getRole() == "Sales" ? true : false;
};