'use client';

import React, { RefObject, useEffect, useRef } from 'react';
import Link from 'next/link';
import logo from '../../assets/images/logo.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type InputRef = RefObject<HTMLInputElement> | RefObject<null>;
type ButtonRef = RefObject<HTMLButtonElement> | RefObject<null>;
type NavLinkRef = RefObject<HTMLAnchorElement> | RefObject<null>;

export const Navbar = () => {
  const pathname = usePathname();
  const searchTermRef: InputRef = useRef<HTMLInputElement>(null);
  const navTogglerRef: ButtonRef = useRef<HTMLButtonElement>(null);
  const homeRef: NavLinkRef = useRef<HTMLAnchorElement>(null);
  const aboutRef: NavLinkRef = useRef<HTMLAnchorElement>(null);
  const faqRef: NavLinkRef = useRef<HTMLAnchorElement>(null);
  const contactRef: NavLinkRef = useRef<HTMLAnchorElement>(null);
  const privacyRef: NavLinkRef = useRef<HTMLAnchorElement>(null);

  const onSearchSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if (searchTermRef.current) {
      const url =
        'https://www.google.com/search?q=mdbytes.com+md+web+technologies+' +
        searchTermRef.current.value;
      window.location.href = url;
    }
  };

  useEffect(() => {
    const linkRefs: NavLinkRef[] = [
      homeRef,
      aboutRef,
      faqRef,
      contactRef,
      privacyRef,
    ];

    // Close the mobile nav display when a link is clicked
    // Set active class on current page
    if (navTogglerRef) {
      let haveActive: boolean = false;
      for (const link of linkRefs) {
        // Setting mobile dropdown to close on link click
        link?.current?.addEventListener('click', () => {
          navTogglerRef.current?.click();
        });

        // Setting active class on nav link
        link.current?.classList.remove('active');

        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const linkTextContent: string | any =
          link.current?.textContent.toLowerCase();
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const path: string | any = pathname.replace('/', '').toLowerCase();
        if (path.includes(linkTextContent)) {
          link.current?.classList.add('active');
          haveActive = true;
        }
      }
      if (!haveActive) {
        homeRef.current?.classList.add('active');
      }
    }
  }, [pathname]);

  return (
    <>
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
          <Link className='navbar-brand' href='/'>
            <Image
              src={'/images/logo.svg'}
              height={32}
              width={32}
              className=''
              alt='...'
            />
          </Link>
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
                <Link
                  ref={homeRef}
                  id='home-link'
                  className='nav-link'
                  aria-current='page'
                  href='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  ref={aboutRef}
                  className='nav-link'
                  aria-current='page'
                  href='/about'
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  ref={faqRef}
                  className='nav-link'
                  aria-current='page'
                  href='/faq'
                >
                  FAQ
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  ref={contactRef}
                  className='nav-link'
                  aria-current='page'
                  href='/contact'
                >
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  ref={privacyRef}
                  className='nav-link'
                  aria-current='page'
                  href='/privacy'
                >
                  Privacy
                </Link>
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
        </nav>
      </div>
    </>
  );
};
