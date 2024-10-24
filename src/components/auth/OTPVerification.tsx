import { useState } from "react";

export default function Component() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling && element.value !== "") {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src="/amd-logo.png" alt="AMD Logo" className="h-8" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          OTP Verification
        </h2>

        <p className="text-center text-sm text-gray-600 mb-6">
          Enter the OTP sent to your email
        </p>

        <form className="space-y-4">
          <div className="flex justify-between mb-5">
            {otp.map((data, index) => {
              return (
                <input
                  className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl"
                  type="text"
                  name="otp"
                  maxLength={1}
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md text-base font-medium hover:bg-gray-800 transition duration-200"
          >
            Verify OTP
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Didn't receive the OTP?{" "}
          <button className="text-black font-medium hover:underline">
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}
