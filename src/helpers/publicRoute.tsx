
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/authenticationService';
 
// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props:any) => !isAuthenticated  ? <Component {...props} /> : <Navigate to={{ pathname: '/dashboard' }} />}
    />
  )
}
 
export default PublicRoute