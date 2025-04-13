import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import LoginVerify from './LoginVerify';
import NotFound from './NotFound';
import HomePage from './HomePage';
import SigninVerify from './SigninVerify';
import SigninPage from './SigninPage';
import SplashScreen from './SplashScreen';
import ChatList from './ChatList';
import ChatDetails from './ChatDetails';

// Create context to share chat data
export const ChatContext = createContext();

const App = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/chats')
      .then(res => res.json())
      .then(data => {
        setChats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <ChatContext.Provider value={{ chats, setChats, loading }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/LoginVerify" element={<LoginVerify />} />
          <Route path="/HomwPage" element={<HomePage />} />
          <Route path="/SigninPage" element={<SigninPage />} />
          <Route path="/SigninVerify" element={<SigninVerify />} />
          <Route path="/SplashScreen" element={<SplashScreen />} />
          <Route path="/ChatList" element={<ChatList />} />
          <Route path="/chats/:id" element={<ChatDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ChatContext.Provider>
  );
};

export default App;
