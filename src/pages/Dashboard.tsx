import React from 'react';
import { Grid, Typography } from '@mui/material';
import PlaceholderCard from '../components/PlaceholderCard';

const Dashboard: React.FC = () => {
    return (
        <div>
            <Typography variant="h4" sx={{ mb: 2 }}>Dashboard</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <PlaceholderCard title="Revenue" subtitle="$12,345" />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <PlaceholderCard title="Active Users" subtitle="1,234" />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <PlaceholderCard title="Server Load" subtitle="Moderate" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
