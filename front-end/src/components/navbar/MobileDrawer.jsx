import { Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose, items }) {
  const location = useLocation();

  return (
    <div
      id="mobile-menu"
      role="menu"
      aria-label="Mobile navigation"
      className={`
        absolute top-full left-0 w-full
        bg-white shadow-xl border-t border-neutral-200
        overflow-hidden lg:hidden
        transition-all duration-700 ease-in-out origin-top
        ${isOpen
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
        }
      `}
    >
      {/* ── Nav Links ── */}
      <ul className="px-4 py-3 flex flex-col items-center justify-center gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              role="menuitem"
              onClick={onClose}
              className={`
                block px-4 py-3 rounded-xl text-base font-medium
                transition-colors duration-200
                hover:text-primary-500
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500
                ${location.pathname === item.path
                  ? 'text-primary-500 border-b-3 border-primary-500'
                  : 'text-neutral-900'
                }
              `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* ── Sign In (mobile only) ── */}
      <div className="px-8 py-4 border-t border-neutral-100">
        <Link
          to="/login"
          onClick={onClose}
          className="
            flex items-center justify-center gap-2 
            px-5 py-3 sm:mx-auto sm:w-[40%] rounded-full
            bg-accent-500 text-gray-200 font-semibold
            hover:bg-accent-700 transition-colors
          "
        >
          <User className="w-5 h-5" />
          Sign in
        </Link>
      </div>
    </div>
  );
}
