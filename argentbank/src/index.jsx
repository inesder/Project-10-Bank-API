import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import ProtectedRoute from './routing/ProtectedRoute'
import store from './app/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage/>} />
    <Route element={<ProtectedRoute/>}>
    <Route path="/profile" element={<ProfilePage/>} />
    </Route>
    </Routes>
    <Footer />
  </Router>
  </Provider>
  </React.StrictMode>
  
);


