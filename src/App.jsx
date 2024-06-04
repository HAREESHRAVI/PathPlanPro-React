import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<AboutUs />} />
      {/* <Route path="/contact"element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
