import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Component() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleResePass = () => {
    navigate("/reset-password");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src="/amd-logo.png" alt="AMD Logo" className="h-8" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md text-base font-medium hover:bg-gray-800 transition duration-200"
            onClick={handleResePass}
          >
            Send OTP
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Remember your password?{" "}
          <Link to="/login" className="text-black font-medium hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
