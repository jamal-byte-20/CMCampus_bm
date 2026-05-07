import React from 'react';
import { Link } from 'react-router-dom';

import bgPage from '../assets/images/PageHeader.jpg';

const PageHeader = ({ title }) => {
  return (
    <section className="relative w-full mt-16 h-[180px] sm:h-[220px] md:h-[250px] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="text-center z-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
          {title}
        </h1>
        
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm md:text-base font-medium">
          <Link to="/" className="text-slate-900 hover:text-cmc-cyan transition">
            Home
          </Link>
          
          <span className="w-4 sm:w-5 h-[3px] bg-secondary-100 rounded-full"></span>
          
          <span className="text-slate-500">
            {title}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <img src={bgPage} alt="hero-bg" className="h-full w-full object-cover" />
      </div>

    </section>
  );
};

export default PageHeader;