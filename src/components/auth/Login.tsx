import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src="/amd-logo.png" alt="AMD Logo" className="h-8" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Sign-In</h2>

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
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-base"
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-sm text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-white text-black border border-black rounded-md text-base font-medium hover:bg-gray-100 transition duration-200"
          >
            Sign in
          </button>
        </form>

        <div className="my-6 text-center text-sm text-gray-500 relative">
          <span className="bg-white px-2 relative z-10">OR</span>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10"></div>
        </div>

        <button
          className="w-full py-2 px-4 bg-black text-white rounded-md text-base font-medium hover:bg-gray-800 transition duration-200"
          onClick={handleRegister}
        >
          Create Account
        </button>

        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
