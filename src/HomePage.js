import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center ">
      <img src={Logo} alt="" />
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/')}
          className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/20 transition"
        >
          Go to Login
        </button>
        <button
          onClick={() => navigate('/verify')}
          className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/80 transition"
        >
          Go to Verification
        </button>
      </div>
    </div>
  );
};

export default HomePage;
