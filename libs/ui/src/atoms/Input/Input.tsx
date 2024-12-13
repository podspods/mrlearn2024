import { cn, string2Id } from '@irachus/jscommon';
import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  hasError?: boolean;
};

/**
 *
 * @param id?: string;
 * @param label?: string;
 * @param hasError?: boolean;
 * @param icon?: IconDefinition;
 * @returns
 */

export default function Input({
  placeholder,
  hasError = false,
  id = string2Id(placeholder),
  className,
  ...props
}: InputProps) {

  const opacity = hasError ? 'bg-warning-500' : 'bg-neutral-100';
  const baseClassName =
    'peer border-none p-1 bg-transparent placeholder-transparent  w-full';
  const focus = 'focus:border-transparent focus:outline-none focus:ring-0 ';
  const globalClassName = cn(
    baseClassName,
    opacity,
    focus,
    
  );
  const baseLabelClass =
    'relative block rounded border border-neutral-500 shadow-sm focus-within:border-primary-600 p-2';
  const labelClass = cn(baseLabelClass,className);

  return (
    <label htmlFor={id} className={labelClass}>
      <input
        id={id}
        className={globalClassName + ' bg-transparent' }
        placeholder={placeholder}
        {...props}
      />
      <span className=' bg-transparent pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 peer-focus:bg-primary-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
        {placeholder}
      </span>
      
    </label>
  );
}
