import React, { MutableRefObject, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

type InputRef = MutableRefObject<HTMLInputElement> | MutableRefObject<null>;
type ButtonRef = MutableRefObject<HTMLButtonElement> | MutableRefObject<null>;
type NavLinkRef = MutableRefObject<HTMLElement> | MutableRefObject<null>;

export const Navbar = () => {
  let searchTermRef: InputRef = useRef(null);
  let navTogglerRef: ButtonRef = useRef(null);
  let homeRef: NavLinkRef = useRef(null);
  let aboutRef: NavLinkRef = useRef(null);
  let faqRef: NavLinkRef = useRef(null);
  let contactRef: NavLinkRef = useRef(null);
  let privacyRef: NavLinkRef = useRef(null);

  const onSearchSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    let url =
      'https://www.google.com/search?q=mdbytes.com+md+web+technologies+' +
      searchTermRef?.current?.value;
    window.location.href = url;
  };

  useEffect(() => {
    let linkRefs: NavLinkRef[] = [
      homeRef,
      aboutRef,
      faqRef,
      contactRef,
      privacyRef,
    ];

    // Close the mobile nav display when a link is clicked
    if (navTogglerRef) {
      for (let link of linkRefs) {
        link?.current?.addEventListener('click', () => {
          navTogglerRef.current?.click();
        });
      }
    }
  }, []);

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark fixed-top'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img
              src={logo}
              alt='site logo in navbar'
              className='site-logo'
              height='32'
            />
          </a>
          <button
            ref={navTogglerRef}
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink
                  ref={homeRef}
                  id='home-link'
                  className='nav-link'
                  aria-current='page'
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  ref={aboutRef}
                  className='nav-link'
                  aria-current='page'
                  to='/about'
                >
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  ref={faqRef}
                  className='nav-link'
                  aria-current='page'
                  to='/faq'
                >
                  FAQ
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  ref={contactRef}
                  className='nav-link'
                  aria-current='page'
                  to='/contact'
                >
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  ref={privacyRef}
                  className='nav-link'
                  aria-current='page'
                  to='/privacy'
                >
                  Privacy
                </NavLink>
              </li>
            </ul>
            <form
              id='search-form'
              className='d-flex'
              role='search'
              action='https://google.com/search'
              method='get'
              onSubmit={(evt: React.SyntheticEvent) => onSearchSubmit(evt)}
            >
              <input
                id='search-term'
                ref={searchTermRef}
                className='form-control me-2'
                type='search'
                placeholder='Custom Google Search'
                aria-label='Search'
                name='q'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
