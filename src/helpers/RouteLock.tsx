import React, { Children } from 'react';
import { Route, useNavigate, Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../Services/authenticationService';

const RouteLock = () => {

  
  if(isAuthenticated()) {
      return <Outlet/>;

  }else{
      return <Navigate to="/login" />
  }
}
 
export default RouteLock;