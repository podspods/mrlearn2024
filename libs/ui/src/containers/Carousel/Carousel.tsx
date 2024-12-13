'use client';

import { Slide } from '@irachus/jscommon';
import { useEffect, useState } from 'react';

export type CarouselProps = {
  speed?: number;
  autoplaySpeed?: number;
  slideList: Slide[];
  width?: number;
  height?: number;
  dots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  idlang: number;
};

/**
 *
 *   speed?: number;
 *   autoplaySpeed?: number;
 *   slideList: Slide[];
 *   width?: number;
 *   height?: number;
 *   dots?: boolean;
 *   slidesToShow?: number;
 *   slidesToScroll?: number;
 *   idlang : number
 * @returns
 */

export default function Carousel({
  width = 800,
  height = 500,
  speed = 1500,
  autoplaySpeed = 3000,
  dots = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  slideList,
  ...props
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= slideList.length - 1 ? 0 : prev + 1));
    }, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplaySpeed, slideList.length]);

  const previous = () => {
    setCurrentSlide((prev) => (prev <= 0 ? slideList.length - 1 : prev - 1));
  };
  // ----------------------------------------------------------------------------------------
  const next = () => {
    setCurrentSlide((prev) => (prev >= slideList.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className='Carousel relative overflow-hidden w-full pb-[45%] rounded lg:rounded-lg '>
      <div
        className={`absolute inset-0 flex transition-transform duration-[${speed}] ease-in-out`}
        style={{
          transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
        }}>
        {slideList.map((slide, index) => (
          <div
            key={index}
            className='flex-shrink-0 w-full'
            style={{ width: `${100 / slidesToShow}%`, height }}>
            <img
              src={slide.src}
              alt={slide.alt[props.idlang]}
              width={width}
              height={height}
              className='object-cover flex-shrink-0 w-full'
            />
            <div className='absolute bottom-0 w-full bg-neutral-800 bg-opacity-50 text-white p-1 pl-3'>
              <p className='text-xs lg:text-lg '>{slide.label[props.idlang]}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={previous}
        className='absolute  bg-opacity-50 left-0 top-1/2 transform -translate-y-1/2 bg-neutral-500 text-neutral-100 p-2 rounded-full'>
        &lt;
      </button>
      <button
        onClick={next}
        className='absolute bg-opacity-50 right-0 top-1/2 transform -translate-y-1/2 bg-neutral-500 text-neutral-100  p-2 rounded-full'>
        &gt;
      </button>
      {dots && (
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2'>
          {slideList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
