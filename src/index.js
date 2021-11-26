import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App/App';

import { ColorModeScript } from "@chakra-ui/react";
import theme from "./components/UI/theme";
import './index.css';



ReactDOM.render(
  <BrowserRouter>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

