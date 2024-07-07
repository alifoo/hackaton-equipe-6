import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import UserLandingPage from './components/UserLandingPage';
import CommunityPage from './components/CommunityPage';
import AcharPsicologo from './components/AcharPsicologo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/user-page" element={<UserLandingPage />} />
        <Route path="/community-page" element={<CommunityPage />} />
        <Route path="/achar-psicologo" element={<AcharPsicologo />} />
      </Routes>
    </Router>
  );
}

export default App;
