import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pwalogo from './pwalogo.png';
import Profilepic from './profilepic.png';
import { TbPlayerTrackNext } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";

const SigninPage = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const goToVerification = () => {
    navigate('/SigninVerify');
  };

  const handleNextStep = () => {
    if (phone.trim() === '') {
      alert('Please enter your full name and phone number.');
      return;
    }
    alert(`Next step for: ${phone} (${name})`);
    navigate('/SigninVerify');
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">

      {/* Logo */}
      <div className="w-full mb-4">
        <img src={Pwalogo} alt="PWA Logo" className="object-contain w-full" />
        <img src={Profilepic} alt="Profile Pic" className="mx-auto mt-4 w-20 h-20 rounded-full" />
      </div>

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

      {/* Full Name Input */}
      <div className="text-left mb-6 w-full max-w-sm">
        <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
          Full Name
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <input
            id="name"
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full outline-none text-gray-700 placeholder:text-sm"
          />
        </div>
      </div>


      {/* Phone Input */}
      <div className="text-left mb-4 w-full max-w-sm">
        <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
          Phone Number
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <AiOutlinePhone className="text-gray-400 mr-2" />
          <input
            id="phone"
            type="tel"
            placeholder="+43 123-456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full outline-none text-gray-700 placeholder:text-sm"
          />
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
        You Have Account?{' '}
        <a href="#" className="text-primary font-semibold hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default SigninPage;
