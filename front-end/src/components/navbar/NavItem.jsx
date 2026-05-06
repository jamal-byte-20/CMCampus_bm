import { Link, useLocation } from 'react-router-dom';

export default function NavItem({ item }) {
  const location = useLocation();
  const isCurrentPath = location.pathname === item.path;

  return (
    <Link
      to={item.path}
      role="menuitem"
      className={`
        px-4 py-2 rounded-lg transition-colors duration-200
        hover:text-primary-500
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500
        ${isCurrentPath ? 'text-primary-500 border-b-3 border-primary-500' : 'text-neutral-900'}
      `}
    >
      {item.label}
    </Link>
  );
}
