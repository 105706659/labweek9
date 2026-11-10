
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import {
  BrowserRouter
} from 'react-router-dom';

import App from './App';

// Create MUI theme
const theme = createTheme();

// Get root HTML element
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// Render React application
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </ThemeProvider>
  </React.StrictMode>
);
