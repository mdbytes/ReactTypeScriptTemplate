import { Callout } from '../callout/Callout';
import { PageHeader } from '../layout/PageHeader';
import Leadership from './Leadership';
import { WhoWeAre } from './WhoWeAre';

export const About = () => (
  <div className='about'>
    <PageHeader page='About Us' icon='fa-solid fa-book-open' />
    <WhoWeAre />
    <hr className='section' />
    <Leadership />
    <hr className='section' />
    <Callout />
  </div>
);
