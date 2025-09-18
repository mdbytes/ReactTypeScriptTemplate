import { GlobalCompany } from './GlobalCompany';
import { Strengths } from './Strengths';

export const WhoWeAre = () => {
  return (
    <div className='container-fluid who-we-are' id='who-we-are-section'>
      <GlobalCompany />
      <hr className='section' />
      <Strengths />
    </div>
  );
};
