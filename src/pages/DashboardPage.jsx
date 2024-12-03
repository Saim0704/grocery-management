import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h4">$10,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Low Stock Items</Typography>
            <Typography variant="h4">5</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
