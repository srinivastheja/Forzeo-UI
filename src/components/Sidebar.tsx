import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    // For simplicity this example uses a permanent drawer on desktop
    return (
        <Drawer variant="permanent" sx={{ width: 240, '& .MuiDrawer-paper': { width: 240, mt: 8 } }}>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItem button component={RouterLink} to="/">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
