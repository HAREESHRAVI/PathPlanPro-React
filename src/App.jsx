import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Contacts />} />
      {/* <Route path="/contact"element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
