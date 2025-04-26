import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pwalogo from "./pwalogo.png";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";

export default function SigninVerify() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (code.trim() === "") {
      alert("Please enter the verification code.");
      return;
    }

    // Simulate successful verification
    alert(`Verification successful for code: ${code}`);
    navigate("/HomePage"); // ✅ Redirect to home
  };

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center py-4">
      {/* Logo */}
      <div className="w-full mb-4">
        <img src={Pwalogo} alt="PWA Logo" className="object-contain w-full" />
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
          <div className="text-2xl">
            <BiLogIn />
          </div>
          Login
        </button>
        <button className="px-4 py-2 text-primary border-b-2 border-primary flex items-center justify-center gap-1">
          <div className="text-2xl">
            <MdVerifiedUser />
          </div>
          Verification
        </button>
      </div>

      {/* Verification Input */}
      <div className="text-left mb-4 w-full max-w-sm relative py-4">
        <div className="relative">
          {/* Label floating on the border line */}
          <label
            htmlFor="code"
            className="absolute -top-3 left-4 bg-white px-1 text-xs text-gray-600"
          >
            Verification
          </label>

          {/* Input and Icon */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <AiOutlinePhone className="text-gray-400 mr-2" />
            <input
              id="code"
              type="text"
              placeholder="Enter Verification Number"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full outline-none text-gray-700 placeholder:text-sm bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleNextStep}
        className="bg-primary text-white text-xs rounded-lg hover:bg-primary/80 transition flex items-center justify-center gap-1 py-2 px-4"
      >
        <div className="text-xl">
          <BiLogIn />
        </div>
        <span>Login</span>
      </button>

      {/* Resend Code Link */}
      <p className="mt-4 text-xs text-gray-600 py-8 text-center">
        Did not receive code?{" "}
        <button
          onClick={() => navigate("/SigninPage")}
          className="text-primary font-semibold hover:underline"
        >
          Try Again
        </button>
      </p>
    </div>
  );
}
