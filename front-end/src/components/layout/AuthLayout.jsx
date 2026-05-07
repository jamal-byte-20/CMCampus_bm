import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../ui/Logo';

/**
 * Auth Layout for authentication pages (Login, Forgot Password).
 * Provides a split-screen design with an illustration on the left and content on the right.
 * 
 * @returns {JSX.Element} The authentication layout.
 */
const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-bg-primary font-sans">
      
      {/* Left Section - Welcome Message and Illustration */}
      <div className="hidden lg:w-1/2 bg-primary-50 lg:flex flex-col items-center justify-center p-8 lg:p-4">
        <div className="max-w-md text-center">
          {/* Illustration Container */}
          <div className="relative mb-10 flex justify-center items-center">
            <img 
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" 
              alt="Welcome Illustration" 
              className="w-80 h-auto rounded-full"
            />
          </div>
          
          {/* Welcome Text */}
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Welcome to <br />
            <span className="text-primary-500">CMC</span>
            <span className="text-accent-700">ampus</span> Platform
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.
          </p>
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16 bg-bg-primary relative">
        
        {/* Header - Logo and Back Link */}
        <div className="flex justify-between items-center mb-16">
          <Logo />
          <Link to="/" className="text-sm font-medium text-brand hover:underline">Back to Home</Link>
        </div>

        {/* Child Routes */}
        <div className="max-w-full lg:max-w-md w-full mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
