import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '.';

import { authenticate } from '../Services/authenticationService';
import { setTokens } from '../Services/localStorage';



export interface IAuthentication {
  isProcessingRequest: boolean;
  accessToken?: string;
}


const initialState: IAuthentication = { isProcessingRequest: false };
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});

export const authenticateUser = (userData: any) => async (dispatch: any) => {
 
  try {
    const authData = await authenticate(
      userData
    );
    // console.log(authData);
    setTokens(authData.data);
    dispatch(success(authData.data));

  } catch (err: any) {
    console.log(err);
    dispatch(error(err));
  }
};

export const { start, success, error } = authenticationSlice.actions;
export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;

