import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Button component for user interactions.
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to be rendered inside the button.
 * @param {string} [props.variant='primary'] - The visual style variant ('primary', 'outline', 'ghost').
 * @param {string} [props.className] - Additional Tailwind classes.
 * @param {boolean} [props.fullWidth=false] - Whether the button should span full width.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [props.rest] - Standard button attributes.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({ children, variant = 'primary', className, fullWidth = false, ...rest }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand text-text-inverse hover:bg-brand-hover shadow-soft",
    outline: "border border-border text-text-primary hover:bg-bg-secondary",
    ghost: "text-brand hover:underline"
  };

  const sizes = {
    default: "py-3 px-6",
    sm: "py-2 px-4 text-sm",
    lg: "py-4 px-8 text-lg"
  };

  return (
    <button 
      className={cn(
        baseStyles,
        variants[variant],
        sizes.default,
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
