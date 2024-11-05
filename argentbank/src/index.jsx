import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signin" element={<LoginPage/>} />
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>
);


