import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';

/**
 * Main Layout for pages that require the Navbar and Footer.
 * 
 * @returns {JSX.Element} The layout wrapping the page content.
 */
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
