// src/App.js
import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Sidebar.css';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Header />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {/* Main Content goes here */}
          <h1>Welcome to the POS System</h1>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
