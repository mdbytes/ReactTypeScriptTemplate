import { useEffect } from 'react';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import Link from 'next/link';

/**
 * The NotFound function takes no parameters and returns a JSX element
 * indicating that the requested page was not found.  This element is identified
 * as the 'errorElement' in the react router component.
 *
 * @returns JSX Element
 */
export const NotFound = () => {
  // Redirects users to home page 4 seconds after page loads
  useEffect(() => {
    // setTimeout(() => {
    //   window.location.replace('/');
    // }, 4000);
  }, []);

  return (
    <>
      <Navbar />
      <div className='not-found'>
        <h1>OOPS! </h1>
        <h2>Page Not Found</h2>

        <p>We couldn&apos;t find that page on our site.</p>

        <p>Redirecting to Home Page</p>
        <p>
          Click <Link href='/'>here</Link> to go there now.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
