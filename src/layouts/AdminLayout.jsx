import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <Box display="flex">
      {/* Sidebar */}
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/inventory">
            <ListItemText primary="Inventory" />
          </ListItem>
          <ListItem button component={Link} to="/sales">
            <ListItemText primary="Sales" />
          </ListItem>
          <ListItem button component={Link} to="/users">
            <ListItemText primary="Users" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box flex={1}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Grocery Management</Typography>
          </Toolbar>
        </AppBar>
        <Box p={3}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
