import React from 'react';
import { PageHeader } from '../layout/PageHeader';

export const FAQ = () => {
  return (
    <div className='faq'>
      <PageHeader page='FAQ' icon='fa-solid fa-clipboard-question' />
      <div className='container py-5'>
        <h2 className='heading--section text-center py-3'>
          Frequently asked questions
        </h2>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                What&apos;s included with this website?
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  <strong>This high performance website</strong> is built with
                  your business goal&apos;s in mind.
                </p>
                <ul>
                  <li>
                    <strong>Customized content</strong> for the home, about,
                    faq, contact and privacy pages.
                  </li>
                  <li>
                    A fully functioning <strong>contact form</strong> and link
                    to an <strong>interactive map</strong> so that customers can
                    get in touch.
                  </li>
                  <li>
                    <strong>SEO optimization</strong> with objective criteria to
                    give your site the best chance of being found by search
                    engines.
                  </li>
                  <li>
                    Free <strong>web hosting</strong> options for the first
                    year.
                  </li>
                  <li>
                    Up to three hours per month for{' '}
                    <strong>site updating</strong> and editing.{' '}
                  </li>
                </ul>
                See more about options and pricing at our{' '}
                <a href='https://www.mdbytes.com/services/catalog'>
                  services catalog
                </a>{' '}
                .{' '}
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                What does the development process look like?
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  While the development process for each website is customized,
                  there are common phases of development.
                </p>
                <ul>
                  <li>
                    <strong>Information gathering</strong> where we gather as
                    much information about your company, branding, marketing
                    materials and digital content as possible.
                  </li>
                  <li>
                    <strong>Prototyping</strong> where we develop and deliver
                    rapid prototypes, drawings and descriptions of what your
                    site will look and feel like when complete.
                  </li>
                  <li>
                    <strong>Development</strong> when the code is being
                    implemented based on the agreed upon prototypes.
                  </li>
                  <li>
                    <strong>Delivery and review</strong>, during which your
                    feedback and modification requests are submitted. year.
                  </li>
                  <li>
                    <strong>Deployment and hosting</strong> when your finished
                    website goes live on a web server.{' '}
                  </li>
                </ul>
                You can find additional detail related to our commitments at
                our&nbsp;
                <a href='https://www.mdbytes.com/terms'>
                  Universal Terms of Service
                </a>{' '}
                .{' '}
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                How long will it take?
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                Typically, the development process can be completed in as little
                as seven days but the average is between two and three weeks. We
                will discuss timelines at the beginning of your project and be
                clear about the information and feedback we will need from you
                to complete your project on time.{' '}
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingFour'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                When is the website completed?
              </button>
            </h2>
            <div
              id='collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='headingFour'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                Simply put,{' '}
                <strong>
                  the website is completed when we meet the goals set at the
                  beginning of the project.
                </strong>{' '}
                These goals include not just building the website, but also
                hitting performance and SEO standards which are agreed upon in
                advance.{' '}
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingFive'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseFive'
              >
                How much does it cost?
              </button>
            </h2>
            <div
              id='collapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='headingFive'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  The price for this website template, implemented for your
                  needs, begins at <strong>$1,200.</strong>
                </p>
                <p>
                  Please see our
                  <a href='https://www.mdbytes.com/terms'>
                    Universal Terms of Service
                  </a>{' '}
                  for additional terms and conditions which apply.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
