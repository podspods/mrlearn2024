'use client'

import React from 'react' 
import {cn} from '@irachus/jscommon'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>&  {
  

};

export default function Button({ children,className,...props }: ButtonProps) {


  const mergedClassName = cn('px-2 py-1 rounded border border-b-2 border-r-2  border-neutral-300 bg-neutral-100 active:scale-95', className );

  return ( 
    <>
    <button type='button' className={mergedClassName + ' active:border ' }
        {...props}
      >{children}</button>

    </>
  );
}