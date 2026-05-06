import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Logo component displaying the brand name.
 * 
 * @param {object} props
 * @param {string} [props.className] - Optional additional CSS classes.
 * @returns {JSX.Element} The rendered logo.
 */
const Logo = ({ className = '' }) => {
  return (
    <h1 className={`text-2xl sm:text-3xl font-bold shrink-0 ${className}`}>
      <Link to="/" className="flex items-center">
        <span className="text-primary-500">CMC</span>
        <span className="text-accent-700">ampus</span>
      </Link>
    </h1>
  );
};

export default Logo;
