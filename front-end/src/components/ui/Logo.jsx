import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo/logo.png';

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
        <img src={LogoImg} alt="Logo" className='w-64 h-auto object-contain -my-9 lg:-my-12' />
      </Link>
    </h1>
  );
};

export default Logo;
