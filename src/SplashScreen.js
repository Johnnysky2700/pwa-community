// import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png';

const SplashScreen = () => {
  const navigate = useNavigate();

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       navigate('/ChatList'); // 👈 Navigates to your ChatList screen
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <img src={Logo} alt="PWA Logo" className="object-contain animate-pulse" />
    </div>
  );
};

export default SplashScreen;
