import React from 'react';
import { CssBaseline, Box, Button } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link, Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
import './components/Sidebar.css'; // Import CSS file
import Dashboard from './pages/dashboard'; // Import Dashboard component

function App() {
  console.log('App component rendered');
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
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <h1>Welcome to the POS System</h1>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" size="large">
                Go to Dashboard
              </Button>
            </Link>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}



export default App;
