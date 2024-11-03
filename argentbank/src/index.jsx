import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>
);


