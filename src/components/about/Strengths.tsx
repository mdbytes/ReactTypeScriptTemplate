import advantagePic1 from '../../assets/images/global.png';
import advantagePic2 from '../../assets/images/flexible.png';
import advantagePic3 from '../../assets/images/expertise.png';
import advantagePic4 from '../../assets/images/perspective.png';
import Image from 'next/image';

export const Strengths = () => {
  return (
    <div className='container'>
      <div className='row content'>
        <h3 className='heading--section text-center'>Our Strengths&nbsp;</h3>
      </div>
      <div className='row content'>
        <div className='col-xl-3 col-lg-6 advantage'>
          <Image
            src={'/images/global.png'}
            height={600}
            width={600}
            className='img-fluid'
            alt='advantage 1'
          />
          <h4>Global Market</h4>
        </div>
        <div className='col-xl-3 col-lg-6 advantage'>
          <Image
            src={'/images/flexible.png'}
            height={600}
            width={600}
            className='img-fluid'
            alt='advantage 1'
          />
          <h4>Flexibility</h4>
        </div>
        <div className='col-xl-3 col-lg-6 advantage'>
          <Image
            src={'/images/expertise.png'}
            height={600}
            width={600}
            className='img-fluid'
            alt='advantage 1'
          />
          <h4>Expertise</h4>
        </div>
        <div className='col-xl-3 col-lg-6 advantage'>
          <Image
            src={'/images/perspective.png'}
            height={600}
            width={600}
            className='img-fluid'
            alt='advantage 1'
          />
          <h4>Perspective</h4>
        </div>
      </div>
    </div>
  );
};
