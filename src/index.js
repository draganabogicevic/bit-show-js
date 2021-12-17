import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchContextProvider from "./context/search-context";

import App from './app/App';
import './index.css';



ReactDOM.render(
  <BrowserRouter>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>  
  </BrowserRouter>,
  document.getElementById('root')
);

