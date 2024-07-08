import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';

import MainPage from './components/MainPage';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import UserLandingPage from './components/UserLandingPage';
import CommunityPage from './components/CommunityPage';
import AcharPsicologo from './components/AcharPsicologo';
import AcharPsicologoPart2 from './components/AcharPsicologoPart2';
import ConfirmationScreen from './components/ConfirmationScreen';
import IframeComponent from './components/IframeComponent';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/user-page" element={<UserLandingPage />} />
          <Route path="/community-page" element={<CommunityPage />} />
          <Route path="/achar-psicologo" element={<AcharPsicologo />} />
          <Route path="/achar-psicologo-2" element={<AcharPsicologoPart2 />} />
          <Route path="/confirmation" element={<ConfirmationScreen />} />
          <Route path="/iframe" element={<IframeComponent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
