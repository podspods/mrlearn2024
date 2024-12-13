'use client';
import { useRef, useState } from 'react';

export enum TooltipPosition {
  TOP = 1,
  BOTTOM,
  LEFT,
  RIGHT
}

export type TooltipProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: TooltipPosition;
  children: React.ReactNode;
  message?: string;
};
/**
 *
 * @param  position?: TooltipPosition =TooltipPosition.TOP ;
 * @param  message?: string = '?',
 * @param   children: React.ReactNode;
 * @returns react node
 */

export default function Tooltip({
  position = TooltipPosition.TOP ,
  message = '?',
  ...props
}: TooltipProps) {
  const [show, setShow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

const setPosition = () => {
  switch (position) {
    case TooltipPosition.BOTTOM : return {
      bottom: '-2rem' ,
      left: '50%',
      transform: 'translateX(-50%)'
    }
    case TooltipPosition.LEFT : return {
      // left: '0' ,
      // top: '0' ,
      transform: 'translateX(-101%) translateY(100%)',
    }
    case TooltipPosition.RIGHT : return {
      right: '0%' ,
      transform: 'translateY(100%) translateX(101%)',
    }
    default : return {
      top: '-2rem' ,
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }
}

const positionStyle = setPosition();


  return (
    <>
      <div className='relative'>
        <span
          className='cursor-pointer'
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}>
          {props.children}
        </span>
        {show && (
          <div
            ref={tooltipRef}
            className={`absolute whitespace-nowrap bottom-full flex flex-col items-center group-hover:flex p-1 rounded bg-secondary-200 text-secondary-800 ${
              !show ? 'hidden' : ''
            } `}
            style={positionStyle}
            {...props}>
            {message}
          </div>
        )}
      </div>
    </>
  );
}
