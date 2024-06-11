// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5', marginBottom: '20px' }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          POS System Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
