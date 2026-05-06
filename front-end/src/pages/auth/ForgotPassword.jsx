import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

/**
 * Forgot Password page component.
 * @returns {JSX.Element} The forgot password form.
 */
const ForgotPassword = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-text-primary mb-2">Forgot Password?</h1>
      <p className="text-text-secondary mb-8">
        Enter your email address to receive a password reset link.
      </p>

      <form className="space-y-6">
        <Input 
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          icon={<Mail size={18} />}
          required
        />

        <Button type="submit" fullWidth className="mt-8">
          Send Reset Link 
          <ChevronRight size={20} />
        </Button>

        <p className="text-center text-sm text-text-secondary mt-8">
          Remember your password? <Link to="/login" className="text-brand font-bold hover:underline">Back to Login</Link>
        </p>
      </form>
    </>
  );
};

export default ForgotPassword;
