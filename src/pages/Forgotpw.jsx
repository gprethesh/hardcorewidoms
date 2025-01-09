import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">Reset Password</h1>
          <p className="text-muted-foreground">
            Enter your email to reset your password
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-lg bg-white">
          <form className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#319E5E] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 border-2 border-[#121212] bg-white hover:bg-gradient-to-r from-[#121212] to-[#670404] text-[#121212] hover:text-white transition-colors duration-300 rounded-md font-medium"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            Remember your password?{" "}
            <Link to="/login" className="text-[#319E5E] hover:underline">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
