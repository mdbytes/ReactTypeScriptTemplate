'use client';

import React from 'react';
import logo from '../../assets/images/logo.svg';
import homePhoto from '../../assets/images/WebDeveloper.png';
import { featuresClick } from '../features/Features';
import Image from 'next/image';

function Jumbotron() {
  return (
    <div className='jumbotron row'>
      <div className='col-md-6 site-info'>
        <div>
          <h1 className='heading'>Website Template</h1>
          <p className='heading--tagline'>
            from <span className='logo-font'>md</span>
            <span className='name-font'>Bytes</span>
          </p>
          <div className='col-md-6 jumbotron-header'>
            <Image
              src={logo}
              className='jumbotron-logo site-logo'
              alt='logo'
              height='200'
            />
          </div>
        </div>

        <button
          onClick={featuresClick}
          id='home-learn-button'
          className='jumbotron-link btn btn-primary rounded-pill'
        >
          Learn More
        </button>
      </div>
      <div className='col-md-6 site-info'>
        <Image
          src={homePhoto}
          alt='home '
          className='img-fluid animate__animated animate__zoomInDown'
        />
        <p className='jumbo-promo animate__animated animate__zoomInDown'>
          Customized | Optimized | Expandable.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
