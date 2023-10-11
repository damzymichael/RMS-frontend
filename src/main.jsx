import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AuthContextProvider} from './context/AuthContext';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
