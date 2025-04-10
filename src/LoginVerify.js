import { useState } from "react";

export default function LoginVerify() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = code.join("");
    console.log("OTP submitted:", otp);
    // Do your verification logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800 dark:text-white">
          Verify Your Account
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
          Enter the 6-digit code we sent to your email or phone.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between gap-2">
            {code.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                className="w-12 h-12 text-center text-xl border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Verify
          </button>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Didn't get the code?{" "}
            <button
              type="button"
              onClick={() => alert("Resend code clicked")}
              className="text-blue-600 hover:underline"
            >
              Resend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
