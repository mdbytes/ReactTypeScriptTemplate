'use client';

import { Slides } from './Slides';
import { slides } from './slideData';
import { useEffect } from 'react';

type SliderProps = {
  id: string;
};

export const Slider = (props: SliderProps) => {
  useEffect(() => {
    let nextClick: HTMLButtonElement | null;
    nextClick = document.querySelector('.carousel-control-next-icon');
    nextClick?.click();
  }, []);

  return (
    <div className='container'>
      <h2 className='text-center fw-bold pt-5'>Our Work</h2>
      <p className='text-center '>Click Any Image to Visit Site</p>
      <div
        id={props.id}
        className='carousel slide slider mb-5'
        data-bs-ride='carousel'
        data-pause='true'
      >
        <div className='carousel-inner'>{<Slides slides={slides} />}</div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target={`#${props.id}`}
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target={`#${props.id}`}
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};
