// src/components/Button.tsx
import React from 'react';
import '../../styles.css';


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>&  {
  className?: string;
  disabled?: boolean;
};

// export type ButtonProps = {
//   children: React.ReactNode;
// };

export default function Button({ className='',disabled, children, ...props }: ButtonProps) {

  const grayed = disabled;
  return (
    <>
    {grayed}
    <button className={className + ' p-2 rounded border border- '} {...props}>
      {children}
    </button>
    </>
  );
}
