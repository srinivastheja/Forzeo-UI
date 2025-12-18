import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import SignupForm from './Auth/SignupForm';

const Signup: React.FC = () => {
    return (
        <Paper sx={{ p: 4 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h5">Create account</Typography>
                <Typography color="text.secondary">Register a new account</Typography>
            </Box>
            <SignupForm />
        </Paper>
    );
};

export default Signup;
