import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app/store.js';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <ToastContainer/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
