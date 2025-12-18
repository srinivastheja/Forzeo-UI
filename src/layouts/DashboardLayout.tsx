import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import TopAppBar from '../components/TopAppBar';
import Sidebar from '../components/Sidebar';

const DashboardLayout: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <TopAppBar />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default DashboardLayout;
