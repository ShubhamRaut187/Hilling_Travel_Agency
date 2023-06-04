import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider, extendTheme} from '@chakra-ui/react';
const breakpoints = {
  sm:'320px',
  md:'768px',
  lg:'960px',
  xl:'1200px',
  '2xl':'1536px',
}

const theme = extendTheme({breakpoints})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
