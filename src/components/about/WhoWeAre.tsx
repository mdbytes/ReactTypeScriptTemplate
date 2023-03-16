import { GlobalCompany } from './GlobalCompany';
import { Strengths } from './Strengths';
import { OurWork } from './OurWork';
import Leadership from './Leadership';

export const WhoWeAre = () => {
  return (
    <div className='container-fluid who-we-are' id='who-we-are-section'>
      <GlobalCompany />
      <hr className='section' />
      <Strengths />
      <hr className='section' />
      <OurWork />
      <hr className='section' />
      <Leadership />
    </div>
  );
};
