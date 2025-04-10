import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to PWA Community</h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/')}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Go to Login
        </button>
        <button
          onClick={() => navigate('/verify')}
          className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition"
        >
          Go to Verification
        </button>
      </div>
    </div>
  );
};

export default HomePage;
