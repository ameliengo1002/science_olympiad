"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface LogInProps {
  onLogin: () => void; // Function passed from the parent to handle successful login
}

const LogIn: React.FC<LogInProps> = ({ onLogin }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulating a successful login - you can replace this with actual login logic
    if (email === 'admin@example.com' && password === 'password123') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/?loggedIn=true'); // Redirect to home or another route after login
    } else {
      alert('Invalid email or password'); // Basic error handling
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-olympiadGreen flex items-center justify-center">
        <div className="text-center text-white">
          <img
            src="/images/science-olympiad-logo.png"
            alt="Science Olympiad Logo"
            className="mx-auto mb-6"
            style={{ width: '600px', height: 'auto' }}
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-3/4 max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Sign In</h2>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-olympiadGreen focus:border-olympiadGreen sm:text-sm"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Handle email input
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-olympiadGreen focus:border-olympiadGreen sm:text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Handle password input
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-olympiadGreen text-white rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olympiadGreen"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;