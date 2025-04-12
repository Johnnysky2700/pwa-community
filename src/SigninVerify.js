import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pwalogo from './pwalogo.png';
import { TbPlayerTrackNext } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";

export default function SigninVerify() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (code.trim() === '') {
      alert('Please enter the verification code.');
      return;
    }

    // Simulate successful verification
    alert(`Verification successful for code: ${code}`);
    navigate('/HomePage'); // ✅ Redirect to home
  };

  const goToLogin = () => {
    navigate('/');
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
        Signin For Account
      </h2>

      {/* Tabs */}
      <div className="flex mb-6 text-xs">
        <button
          onClick={goToLogin}
          className="px-4 py-2 text-gray-500 border-b-2 border-transparent hover:text-primary flex items-center justify-center gap-1"
        >
          <BiLogIn />
          Login
        </button>
        <button className="px-4 py-2 text-primary border-b-2 border-primary flex items-center justify-center gap-1">
          <MdVerifiedUser />
          Verification
        </button>
      </div>

      {/* Verification Input */}
      <div className="text-left mb-4 w-full max-w-sm">
        <label htmlFor="code" className="block text-sm text-gray-600 mb-1">
          Verification
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <AiOutlinePhone className="text-gray-400 mr-2" />
          <input
            id="code"
            type="text"
            placeholder="Enter Verification Number"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full outline-none text-gray-700 placeholder:text-sm"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleNextStep}
        className="bg-primary text-white text-xs rounded-lg hover:bg-primary/80 transition flex items-center justify-center gap-1 py-2 px-4"
      >
        <BiLogIn />
        <span>Login</span>
      </button>

      {/* Resend Code Link */}
      <p className="mt-4 text-xs text-gray-600 py-8 text-center">
        Did Not Receive Code?{' '}
        <a href="#" className="text-primary font-semibold hover:underline">
          TryAgain
        </a>
      </p>
    </div>
  );
}
