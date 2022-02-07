import jwt_decode from "jwt-decode";



export const setTokens = (authRes: any) => {
  // console.log(authRes)
  let decoded: any = jwt_decode(authRes);

  localStorage.setItem('token', authRes);
  localStorage.setItem('user', decoded.nameid);
  localStorage.setItem('role', decoded.role);
  
};

export const removeTokens = () => {
  
  localStorage.removeItem('user');
  localStorage.removeItem('role');
  localStorage.removeItem('token');
  
  console.log("logout");
  
};

export const getAccessToken = () => localStorage.getItem('token')?.slice(1, -1);
export const getUser = () => localStorage.getItem('user');
export const getRole = () => localStorage.getItem('role');
 
