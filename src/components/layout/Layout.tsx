import { Fragment } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { CookiesApproval } from './CookiesApproval';

import { BackToTop } from './BackToTop';
import { ScrollToTop } from './ScrollToTop';

export const Layout = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Navbar />

      <Footer />
      <BackToTop />
      <CookiesApproval />
    </Fragment>
  );
};
