import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from '../src/store';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
   < Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
