import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import LogoImg from '../../assets/images/logo/Logo.png';
import { BookOpen } from 'lucide-react';

/**
 * Utility for safe Tailwind class merging
 */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Professional, Scalable Logo Component
 * 
 * @param {string} size - 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom'
 * @param {string} variant - 'default' | 'navbar' | 'sidebar' | 'footer' | 'auth' | 'compact'
 * @param {string} mode - 'full' | 'icon-only' | 'text-only'
 * @param {boolean} useImage - If true, uses the original LogoImg PNG. If false, uses a scalable SVG icon.
 * @param {boolean} trimWhitespace - Applies proportional negative margins to fix whitespace in the legacy logo image.
 */
export default function Logo({
  className,
  size = 'custom', // Default respects passed custom widths
  variant = 'default',
  mode = 'full', 
  text = 'CMCampus',
  useImage = true, 
  trimWhitespace = true,
  iconClassName,
  textClassName,
  onClick,
}) {
  const showIcon = mode === 'full' || mode === 'icon-only';
  
  // By default, if using the image, it already contains the text.
  // We only render HTML text if explicitly requested via text-only or using the SVG fallback.
  const showText = mode === 'text-only' || (mode === 'full' && !useImage);

  // --- Sizing System ---
  // Wrapper sizing dictates the footprint of the logo. Width-based for horizontal logos.
  const wrapperSizeMap = {
    sm: 'w-24',
    md: 'w-32',
    lg: 'w-40',
    xl: 'w-48',
    '2xl': 'w-56',
    custom: '', 
  };

  // Icon Sizing (for SVG fallback)
  const iconSizeMap = {
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    '2xl': 40,
    custom: 32,
  };

  // Typography sizing
  const textSizeMap = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl',
    custom: 'text-2xl',
  };

  // --- Variant System ---
  // Adapts typography and colors based on context (useful for SVG + Text mode)
  const textVariantMap = {
    default: 'text-secondary-900 dark:text-white',
    navbar: 'text-secondary-900 dark:text-white hover:text-brand transition-colors',
    sidebar: 'text-white',
    footer: 'text-white',
    auth: 'text-secondary-900 dark:text-white',
    compact: 'text-secondary-900 dark:text-white',
  };

  const iconVariantMap = {
    default: 'text-brand',
    navbar: 'text-brand',
    sidebar: 'text-white',
    footer: 'text-white',
    auth: 'text-brand',
    compact: 'text-brand',
  };

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`Go to ${text} homepage`}
      className={cn(
        "group flex items-center gap-2 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-lg transition-opacity duration-700 hover:opacity-90",
        wrapperSizeMap[size],
        className
      )}
    >
      {/* --- ICON / IMAGE PART --- */}
      {showIcon && (
        <div className={cn("flex items-center justify-center shrink-0 w-full")}>
          {useImage ? (
            <img
              src={LogoImg}
              alt={showText ? "Logo Icon" : `${text} Logo`}
              className={cn(
                "w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105",
                // Proportional trim scales dynamically with width instead of breaking at breakpoints!
                trimWhitespace && "", 
                iconClassName
              )}
            />
          ) : (
            <BookOpen
              size={iconSizeMap[size]}
              className={cn(
                "transition-transform duration-700 group-hover:scale-110",
                iconVariantMap[variant],
                iconClassName
              )}
              aria-hidden="true"
            />
          )}
        </div>
      )}

      {/* --- TEXT PART --- */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={cn(
              "font-display font-bold leading-none tracking-tight",
              textSizeMap[size],
              textVariantMap[variant],
              textClassName
            )}
          >
            {text}
          </span>
        </div>
      )}
    </Link>
  );
}
