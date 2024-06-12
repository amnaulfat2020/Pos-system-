import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/dashboard'; // Import Dashboard component

const Routers = () => {
  return (
    <Router>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
