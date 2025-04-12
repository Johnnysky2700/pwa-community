import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import LoginVerify from './LoginVerify';
import NotFound from './NotFound';
import HomePage from './HomePage';
import SigninVerify from './SigninVerify';
import SigninPage from './SigninPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/LoginVerify" element={<LoginVerify />} />
        <Route path="/HomwPage" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/SigninPage" element={<SigninPage />} />
        <Route path="/SigninVerify" element={<SigninVerify />} />
      </Routes>
    </Router>
  );
};

export default App;
