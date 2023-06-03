import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { ChakraProvider } from "@chakra-ui/react"
import { store } from './Redux/store';
import { ProSidebarProvider } from 'react-pro-sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Provider store = {store}>
          <ProSidebarProvider>
            <App />
          </ProSidebarProvider>          
        </Provider>
      </BrowserRouter>   
    </ChakraProvider> 
  </React.StrictMode>
);
reportWebVitals();