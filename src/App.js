import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
      <div>
        <Router>
        <ScrollToTop />
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          </Routes>
    </Router>
      </div>
  ) 
}

export default App;