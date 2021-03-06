import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Theme
import { ThemeProvider } from '@material-ui/core';
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);