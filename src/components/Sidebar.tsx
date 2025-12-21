import React, { useMemo } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Toolbar,
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Explore as ExploreIcon,
    Visibility as VisibilityIcon,
    MenuBook as MenuBookIcon,
    Groups as GroupsIcon,
    Insights as InsightsIcon,
    Notifications as NotificationsIcon,
    Settings as SettingsIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

interface NavigationItem {
    label: string;
    to: string;
    icon: React.ReactNode;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
    { label: 'Dashboard', to: '/overview', icon: <DashboardIcon /> },
    { label: 'Prompt Explorer', to: '/prompt-explorer', icon: <ExploreIcon /> },
    { label: 'Visibility Scores', to: '/visibility-scores', icon: <VisibilityIcon /> },
    { label: 'Citations', to: '/citations', icon: <MenuBookIcon /> },
    { label: 'Competitors', to: '/competitors', icon: <GroupsIcon /> },
    { label: 'Insights', to: '/insights', icon: <InsightsIcon /> },
    { label: 'Alerts', to: '/alerts', icon: <NotificationsIcon /> },
    { label: 'Settings', to: '/settings', icon: <SettingsIcon /> },
];

const DRAWER_WIDTH = 240;

const Sidebar: React.FC = () => {
    const navigationItems = useMemo(() => NAVIGATION_ITEMS, []);

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    marginTop: 8,
                },
            }}
        >
            <Toolbar />
            <Box component="nav" sx={{ overflow: 'auto', flex: 1 }}>
                <List>
                    {navigationItems.map(({ label, to, icon }) => (
                        <ListItem
                            key={to}
                            button
                            component={RouterLink}
                            to={to}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                },
                            }}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;