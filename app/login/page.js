"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center space-y-6">
        <h2 className="text-2xl font-bold text-[#10B981]">Login</h2>
        <p className="text-gray-500">Sign in with your Google account</p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors"
        >
          <FcGoogle size={24} />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
