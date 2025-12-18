import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PlaceholderCard: React.FC<{ title?: string; subtitle?: string }> = ({ title = 'Widget', subtitle = 'Placeholder content' }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography color="text.secondary">{subtitle}</Typography>
            </CardContent>
        </Card>
    );
};

export default PlaceholderCard;
