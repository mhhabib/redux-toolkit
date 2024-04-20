import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from './components/ProfilePage';
import SummaryPage from './components/SummaryPage';
import ConfigPage from './components/ConfigPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;