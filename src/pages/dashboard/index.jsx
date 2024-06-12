import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import SalesChart from "../dashboard/SaleChart";
import RevenueChart from './RevenueChart';
import TopSellingProducts from './TopSellingProducts';
import LowStockAlerts from './LowStockAlerts';
import RecentTransactions from './RecentTransactions';
import TopPerformingEmployees from './TopPerformingEmployees';
import SystemNotifications from './SystemNotifications';
import './dashboard.css';

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className="dashboard-card">
            <Typography variant="h6" className="dashboard-title">Total Sales</Typography>
            <Typography variant="h4" className="dashboard-value">$50,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className="dashboard-card">
            <Typography variant="h6" className="dashboard-title">Total Revenue</Typography>
            <Typography variant="h4" className="dashboard-value">$120,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className="dashboard-card">
            <Typography variant="h6" className="dashboard-title">New Customers</Typography>
            <Typography variant="h4" className="dashboard-value">350</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper className="dashboard-card">
            <Typography variant="h6" className="dashboard-title">Sales Trend</Typography>
            <SalesChart />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper className="dashboard-card">
            <Typography variant="h6" className="dashboard-title">Top Selling Products</Typography>
            <TopSellingProducts />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className="dashboard-card">
            <Typography variant="h6" className="dashboard-title">Low Stock Alerts</Typography>
            <LowStockAlerts />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className="dashboard-card">
            <Typography variant="h6" className="dashboard-title">Recent Transactions</Typography>
            <RecentTransactions />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className="dashboard-card">
            <Typography variant="h6" className="dashboard-title">Top Performing Employees</Typography>
            <TopPerformingEmployees />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className="dashboard-card">
            <Typography variant="h6" className="dashboard-title">System Notifications</Typography>
            <SystemNotifications />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
