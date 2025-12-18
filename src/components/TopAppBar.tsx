import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const TopAppBar: React.FC = () => {
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <IconButton edge="start" color="inherit" sx={{ mr: 2 }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                    Forzeo Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default TopAppBar;
