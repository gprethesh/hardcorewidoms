import { Lock, Mail, User, Gift } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">Create Account</h1>
          <p className="text-muted-foreground">Sign up for a new account</p>
        </div>

        <div className="border rounded-lg p-6 shadow-lg bg-white">
          <form className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Full Name</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#319E5E] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

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

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Password</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#319E5E] focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
            </div>

            {/* Referral Code (Optional) */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">
                Referral Code <span className="text-gray-500">(Optional)</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <Gift className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#319E5E] focus:border-transparent"
                  placeholder="Enter referral code"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-gray-300 text-[#319E5E] focus:ring-[#319E5E]"
              />
              <label htmlFor="terms" className="ml-2 text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-[#319E5E] hover:underline">
                  Terms and Conditions
                </Link>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 border-2 border-[#121212] bg-white hover:bg-gradient-to-r from-[#121212] to-[#670404] text-[#121212] hover:text-white transition-colors duration-300 rounded-md font-medium"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#319E5E] hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
