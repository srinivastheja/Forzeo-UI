import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { theme } from './theme';
import './styles.css';
import { AuthProvider } from './hooks/useAuth';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>
);
