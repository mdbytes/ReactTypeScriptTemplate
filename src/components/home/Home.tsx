import Jumbotron from './Jumbotron';
import { Features } from '../features/Features';
import { Callout } from '../callout/Callout';

export const Home = () => {
  return (
    <>
      <Jumbotron />
      <Features />
      <hr className='section' />
      <Callout />
    </>
  );
};
