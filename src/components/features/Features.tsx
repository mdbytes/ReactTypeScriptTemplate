import React from 'react';

import featureOne from '../../assets/images/WebDevCustom.png';
import featureTwo from '../../assets/images/Winner1.png';
import featureThree from '../../assets/images/Growth.png';

import careers from '../../assets/images/careers.jpeg';
import college from '../../assets/images/college.jpeg';

export const featuresClick = () => {
  const features = document.querySelector('#features');
  features?.scrollIntoView();
};

export const Features = () => {
  return (
    <div className='container-fluid features' id='features'>
      <div className='row'>
        <h2 className='heading--section text-center pt-4 pb-2'>Features</h2>
      </div>
      <hr className='section' />
      <div className='row'>
        <div className='card col-md-4'>
          <img src={featureOne} className='card-img-top' alt='...' />
          <div className='card-body'>
            <div>
              <h5 className='card-title'>Customized</h5>
              <p className='card-text'>
                This website can be customized in every way. We start by
                recommending color schemes and fonts based on your current
                branding and marketing strategies. Then we can assist in
                creating content where necessary. In the end, the website built
                with this template will look, act and feel completely different
                that what you see here. It will be uniquely yours. Visit our
                expansive <a href='https://mdbytes.com/gallery'>gallery</a> to
                get a range of the look, feel and functionality of our websites
                and applications.
              </p>
            </div>
          </div>
        </div>
        <div className='card col-md-4'>
          <img src={featureTwo} className='card-img-top' alt='...' />
          <div className='card-body'>
            <div>
              <h5 className='card-title'>Optimized</h5>
              <p className='card-text'>
                All of our websites and web applications rank in the top 10% of
                all websites for both functional performance and Search Engine
                Optimization (SEO). We use{' '}
                <a href='https://gtmetrix.com/'>GT Metrix</a> for testing site
                functionality and{' '}
                <a href='https://www.seobility.net'>Seobility</a> for SEO
                assessment. This website template ranks 97% for functionality
                and 92% for search engine optimization.
              </p>
            </div>
          </div>
        </div>
        <div className='card col-md-4'>
          <img src={featureThree} className='card-img-top' alt='...' />
          <div className='card-body'>
            <div>
              <h5 className='card-title'>Expandable</h5>
              <p className='card-text'>
                This template is designed with reusable components in a format
                which will grow easily with your needs. Not matter where your
                organization is at this time, not matter how much you would like
                to expand, this template will provide a good foundation to add
                more content, expand with enterprise needs, and integrate
                e-commerce as needed. See our{' '}
                <a href='https://www.mdbytes.com/services/catalog'>
                  services catalog
                </a>{' '}
                if you're interested in expanding beyond this beginning
                template.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className='section my-5' />
      <div className='diverse-needs'>
        <div className='row'>
          <h2 className='heading--section text-center py-4'>
            Meeting Diverse Needs
          </h2>
          <p>From e-commerce to targeted business applications</p>
        </div>
        <div className='row'>
          <div className='col-md-6 image-holder'>
            <img
              src={college}
              className='img-fluid'
              alt='cc books'
              title='Online bookstore'
            />
          </div>
          <div className='col-md-6 image-holder'>
            <img
              src={careers}
              className='img-fluid'
              alt='careers'
              title='Careers employment application'
            />
          </div>
        </div>
        <div className='row'>
          <p>
            View our extensive{' '}
            <a href='https://www.mdbytes.com/gallery'>gallery</a> of websites
            and web applications.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
