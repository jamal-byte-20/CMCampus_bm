import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ChevronRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

/**
 * Sign In page component.
 * @returns {JSX.Element} The sign-in form.
 */
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h1 className="text-3xl font-bold text-text-primary mb-8">Sign into Your Account</h1>

      <form className="space-y-6">
        <Input 
          type="email"
          label="Email"
          placeholder="Enter your email"
          icon={<Mail size={18} />}
          required
        />

        <div className="relative">
          <Input 
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="Enter your password"
            icon={<Lock size={18} />}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 text-neutral-400 hover:text-text-secondary transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-border text-brand focus:ring-brand" />
            Remember Me
          </label>
          <Link to="/forgot-password" className="text-sm font-medium text-brand hover:underline">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" fullWidth className='rounded-full my-4'>
          Login 
          <ChevronRight size={20} />
        </Button>
      </form>
    </>
  );
};

export default SignIn;