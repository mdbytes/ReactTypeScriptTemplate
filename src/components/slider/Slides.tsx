import React from 'react';
import { SliderProps } from './slideData';

export const Slides = (props: SliderProps) => {
  let count = 0;

  return (
    <React.Fragment>
      {props.slides.map((slide) => {
        count++;
        return (
          <div className={`carousel-item ${count === 1 ? 'active' : ''}`}>
            <a href='https://google.com'>
              <img
                src={slide.image}
                className='d-block w-100'
                alt={slide.alt}
                title={`Click to visit site: ${slide.title}`}
              />
            </a>
            <div className='carousel-caption d-none d-md-block'>
              <div className='caption-content'>
                <h5>{slide.title}</h5>
                <p>Click to View Site Live</p>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
