import React from 'react';
import homePhoto from '../../assets/images/Startup.png';
import Image from 'next/image';

export const Callout = () => {
  return (
    <div className='container-fluid callout'>
      <div id='what-we-do-callout' className='row'>
        <div className='col-lg-6 callout--image'>
          <Image
            src={homePhoto}
            className='img-fluid'
            alt='home page service callout'
          />
        </div>
        <div className='col-lg-6 callout--text'>
          <div className='row'>
            <h3 className='heading--section'>Get started today</h3>
          </div>
          <ul className='fa-ul'>
            <li>
              <span className='fa-li'>
                <i className='fa-solid fa-users'></i>
              </span>
              User focused websites and applications
            </li>
            <li>
              <span className='fa-li'>
                <i className='fa-solid fa-truck-fast'></i>
              </span>
              High performance solutions developed within budget and on time
            </li>
            <li>
              <span className='fa-li'>
                <i className='fa-solid fa-cloud-arrow-up'></i>
              </span>
              Deployment to a wide variety of network and cloud platforms as
              needed.
            </li>
          </ul>
          <h5>Help us, help you...</h5>
          <a
            href='/contact'
            id='home-contact-button'
            className='btn btn-primary rounded-pill'
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
