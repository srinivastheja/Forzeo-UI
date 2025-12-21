import React from 'react';
import { Typography } from '@mui/material';

const Overview: React.FC = () => {
    return (
        <div>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Overview
            </Typography>
            <Typography color="text.secondary">High level metrics & quick summary cards.</Typography>
        </div>
    );
};

export default Overview;
