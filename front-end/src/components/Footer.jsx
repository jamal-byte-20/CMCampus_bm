import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import Logo from './ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-neutral-300 border-t border-secondary-800 font-sans">
      
      {/* CTA / Newsletter Section */}
      <div className="border-b border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to advance your career?</h2>
            <p className="text-secondary-200">Join thousands of students learning modern, industry-aligned skills today.</p>
          </div>
          <div className="flex w-full lg:w-auto flex-col sm:flex-row gap-4">
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold bg-brand text-white hover:bg-brand-hover hover:shadow-brand transition-all duration-300 group"
            >
              Start Learning Today
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand Section */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex items-center">
            <div className="bg-white/5 p-2 rounded-xl border border-secondary-800 backdrop-blur-sm">
               <Logo className="w-48 sm:w-56 -ml-4" />
            </div>
          </div>
          <p className="text-secondary-200 text-sm leading-relaxed max-w-sm">
            CMC Beni Mellal is a premier vocational training center under OFPPT. 
            We provide top-tier learning resources to empower the next generation of professionals.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-2">
            <SocialIcon href="#" icon={<FaFacebook size={18} />} label="Facebook" />
            <SocialIcon href="#" icon={<FaTwitter size={18} />} label="Twitter" />
            <SocialIcon href="#" icon={<FaInstagram size={18} />} label="Instagram" />
            <SocialIcon href="#" icon={<FaLinkedin size={18} />} label="LinkedIn" />
            <SocialIcon href="#" icon={<FaYoutube size={18} />} label="YouTube" />
          </div>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Navigation</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <FooterItem><FooterLink to="/">Home</FooterLink></FooterItem>
            <FooterItem><FooterLink to="/about">About Us</FooterLink></FooterItem>
            <FooterItem><FooterLink to="/filieres">Filières</FooterLink></FooterItem>
            <FooterItem><FooterLink to="/blogs">Blogs</FooterLink></FooterItem>
            <FooterItem><FooterLink to="/courses">Courses</FooterLink></FooterItem>
          </ul>
        </div>

        {/* Filières Resources */}
        <div className="lg:col-span-3">
          <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Filières</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <FooterItem><FooterLink to="/filieres">Développement Digital</FooterLink></FooterItem>
            <FooterItem><FooterLink to="/filieres">Infrastructure Digitale</FooterLink></FooterItem>
            <FooterItem><FooterLink to="/filieres">Gestion des Entreprises</FooterLink></FooterItem>
            <FooterItem><FooterLink to="/filieres">Commerce</FooterLink></FooterItem>
            <FooterItem><FooterLink to="/filieres">Électricité</FooterLink></FooterItem>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3">
          <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3 text-secondary-200">
              <MapPin size={18} className="shrink-0 text-ui-vibrant mt-0.5" />
              <span>Campus OFPPT, Route Nationale 8,<br />Beni Mellal, Morocco</span>
            </li>
            <li className="flex items-center gap-3 text-secondary-200">
              <Mail size={18} className="shrink-0 text-ui-vibrant" />
              <a href="mailto:contact@cmc.ma" className="hover:text-white transition-colors">contact@cmc.ma</a>
            </li>
            <li className="flex items-center gap-3 text-secondary-200">
              <Phone size={18} className="shrink-0 text-ui-vibrant" />
              <a href="tel:+212500000000" className="hover:text-white transition-colors">+212 5 00 00 00 00</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary-400">
          <p>© {currentYear} CMCampus Beni Mellal. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sub-component for semantic Footer Links
const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-secondary-200 hover:text-ui-vibrant hover:translate-x-1 transition-all duration-300 inline-block"
    >
      {children}
    </Link>
  </li>
);

// Sub-component for non-link list items
const FooterItem = ({ children }) => (
  <li className="text-secondary-200 flex items-center gap-2 group cursor-default">
    <div className="w-1.5 h-1.5 rounded-full bg-secondary-700 group-hover:bg-ui-vibrant transition-colors duration-300"></div>
    <span className="group-hover:text-white transition-colors duration-300">{children}</span>
  </li>
);

// Sub-component for interactive Social Icons
const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full bg-secondary-800 border border-secondary-700 flex items-center justify-center text-secondary-200 hover:bg-brand hover:border-brand hover:text-white hover:shadow-brand hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);