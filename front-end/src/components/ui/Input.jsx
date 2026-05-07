import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Input component for text-based form fields.
 * 
 * @param {object} props
 * @param {string} props.label - The label for the input field.
 * @param {React.ReactNode} [props.icon] - Optional icon to render inside the input.
 * @param {string} [props.className] - Additional Tailwind classes for the wrapper.
 * @param {boolean} [props.required] - Marks the field as required.
 * @param {string} [props.error] - Error message to display.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} [props.rest] - Standard input attributes.
 * @returns {JSX.Element} The rendered input field.
 */
const Input = ({ label, icon, className, required, error, ...rest }) => {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2">
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          className={cn(
            "w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all",
            icon ? "pl-11" : "",
            error 
              ? "border-error focus:border-error focus:ring-error" 
              : "border-border focus:border-brand focus:ring-brand"
          )}
          {...rest}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
};

export default Input;
