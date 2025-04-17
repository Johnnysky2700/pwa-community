import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Pwalogo from './pwalogo.png';
import { TbPlayerTrackNext } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const goToVerification = () => {
    navigate('/LoginVerify');
  };

  const handleNextStep = () => {
    if (phone.trim() === '') {
      alert('Please enter your phone number.');
      return;
    }
    alert(`Next step for: ${phone}`);
    navigate('/LoginVerify');
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      
      {/* Logo */}
      <div className="w-full mb-4">
        <img
          src={Pwalogo}
          alt="PWA Logo"
          className="object-contain w-full"
        />
      </div>

      {/* Heading */}
      <h2 className="text-xl text-gray-800 mb-6 pt-4 text-center">
        Log In To Your Account
      </h2>

      {/* Tabs */}
      <div className="flex mb-6 text-xs">
        <button className="px-4 py-2 text-primary border-b-2 border-primary flex items-center justify-center gap-1">
          <BiLogIn />
          Login
        </button>
        <button
          onClick={goToVerification}
          className="px-4 py-2 text-gray-500 border-b-2 border-transparent hover:text-primary flex items-center justify-center gap-1"
        >
          <MdVerifiedUser />
          Verification
        </button>
      </div>
{/* Phone Input */}
<div className="w-full max-w-sm mb-6">
  <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
  <div className="relative">
    <input
      type="tel"
      id="phone"
      placeholder="+43 123-456-7890"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
      <AiOutlinePhone />
    </div>
  </div>
</div>


      {/* Button */}
      <button
        onClick={handleNextStep}
        className="bg-primary text-white text-xs rounded-lg hover:bg-primary/80 transition flex items-center justify-center gap-1 py-2 px-4"
      >
        <TbPlayerTrackNext />
        <span>Next Step</span>
      </button>

      {/* Sign Up link */}
      <p className="mt-4 text-xs text-gray-600 py-8 text-center">
        Don't have an account?{' '}
        <Link to="/SigninPage" className="text-primary font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
