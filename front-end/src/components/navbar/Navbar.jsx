import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import NavItem from './NavItem';
import MobileMenu from './MobileDrawer';
import Logo from '../ui/Logo';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'courses', label: 'Courses', path: '/courses' },
  { id: 'filieres', label: 'Filieres', path: '/filieres' },
  { id: 'blogs', label: 'Blogs', path: '/blogs' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevScrollRef = useRef(0);
  const headerRef = useRef(null);
  const location = useLocation();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), []);

  // ── Close on route change ──
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // ── Scroll: auto-hide + glass effect ──
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsVisible(prevScrollRef.current > currentY || currentY < 50);
      setIsScrolled(currentY > 50);
      prevScrollRef.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Click outside to close ──
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, closeMenu]);

  // ── ESC key to close ──
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEsc = (e) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen, closeMenu]);

  // ── Lock body scroll when open ──
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      role="banner"
      className={`
        fixed w-full top-0 z-50
        transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      {/* Navbar bar — z-10 so it layers ABOVE the mobile menu */}
      <div
        className={`
          relative z-10
          transition-all duration-300 ease-in-out
          ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white shadow-md py-5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

        {/* ── Logo ── */}
        <Logo />

        {/* ── Desktop Navigation ── */}
        <nav
          className="hidden lg:flex font-mono text-md gap-3 items-center"
          role="menubar"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </nav>

        {/* ── Right Side: CTA + Hamburger ── */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/login"
            className="
              hidden lg:flex items-center gap-2
              px-5 py-2 rounded-full
              bg-accent-500 text-neutral-900 font-medium
              hover:bg-accent-700 transition-colors duration-300
            "
          >
            <User className="w-5 h-5" />
            <span>Sign in</span>
          </Link>

          {/* Hamburger — visible below lg */}
          <button
            className="
              lg:hidden
              hover:cursor-pointer
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500
            "
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen
              ? <X className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-900" />
              : <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-900" />
            }
          </button>
        </div>
        </div>
      </div>

      {/* ── Mobile Menu — z-0 so it slides BEHIND the navbar bar ── */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        items={NAV_ITEMS}
      />
    </header>
  );
}
