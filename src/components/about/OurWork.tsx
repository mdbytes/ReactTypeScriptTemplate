import { Slider } from '../slider/Slider';

export const OurWork = () => {
  return (
    <div className='row content our-work'>
      <div className='col-lg-5'>
        <h3 className='heading--section'>
          Our Work&nbsp;
          <i className='fa-solid fa-person-digging'></i>
        </h3>
        <p className={'intro'}>
          We have completed a wide range of products from single purpose
          applications to enterprise websites. You can learn more by visiting
          our comprehensive <a href='https://mdbytes.com/gallery'>gallery</a> or
          simply click on a site here if it you want to see more.
        </p>
      </div>
      <div className='col-lg-7'>
        <Slider id='about-slider' />
      </div>
    </div>
  );
};
