const env = {
  development: {
    BASE_URL: 'https://localhost:44362/',
    
  },
 
};

export const env_var = env[process.env.NODE_ENV];
