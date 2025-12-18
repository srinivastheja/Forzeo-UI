import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
            <Container maxWidth="xs">
                <Outlet />
            </Container>
        </Box>
    );
};

export default AuthLayout;
