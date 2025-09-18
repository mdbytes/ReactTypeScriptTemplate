'use client';

import React from 'react';
import { PageHeader } from '../layout/PageHeader';
import { WhoWeAre } from './WhoWeAre';
import { Callout } from '../callout/Callout';
import { Slider } from '../slider/Slider';

export const About = () => (
  <div className='about'>
    <PageHeader page='About Us' icon='fa-solid fa-book-open' />
    <WhoWeAre />
    <hr className='section' />
    <Slider id={'carousel-slider'} />
    <hr className='section' />

    <Callout />
  </div>
);
