// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#3f51b5',
        color: 'white',
        position: 'fixed',
        bottom: 0,
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} POS System. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
