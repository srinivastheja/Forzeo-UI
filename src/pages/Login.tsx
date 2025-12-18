import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import LoginForm from './Auth/LoginForm';

const Login: React.FC = () => {
    return (
        <Paper sx={{ p: 4 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h5">Sign in</Typography>
                <Typography color="text.secondary">Enter your credentials to continue</Typography>
            </Box>
            <LoginForm />
        </Paper>
    );
};

export default Login;
