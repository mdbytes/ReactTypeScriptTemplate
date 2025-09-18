import advantagePic1 from '../../assets/images/global.png';
import advantagePic2 from '../../assets/images/flexible.png';
import advantagePic3 from '../../assets/images/expertise.png';
import advantagePic4 from '../../assets/images/perspective.png';
import Image from 'next/image';

export const Strengths = () => {
  return (
    <div className='container'>
      <div className='row content'>
        <h3 className='heading--section text-center'>
          Our Strengths&nbsp;
          <i className='fa-solid fa-earth-asia'></i>
        </h3>
      </div>
      <div className='row content'>
        <div className='col-xl-3 col-lg-6 advantage'>
          <h4>Global Market</h4>
          <Image src={advantagePic1} alt='advantage 1' />
        </div>
        <div className='col-xl-3 col-lg-6 advantage'>
          <h4>Flexibility</h4>
          <Image src={advantagePic2} alt='advantage 2' />
        </div>
        <div className='col-xl-3 col-lg-6 advantage'>
          <h4>Expertise</h4>
          <Image src={advantagePic3} alt='advantage 3' />
        </div>
        <div className='col-xl-3 col-lg-6 advantage'>
          <h4>Perspective</h4>
          <Image src={advantagePic4} alt='advantage 4' />
        </div>
      </div>
    </div>
  );
};
