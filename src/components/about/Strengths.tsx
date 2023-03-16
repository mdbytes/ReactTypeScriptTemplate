import advantagePic1 from '../../assets/images/global.png';
import advantagePic2 from '../../assets/images/flexible.png';
import advantagePic3 from '../../assets/images/expertise.png';
import advantagePic4 from '../../assets/images/perspective.png';

export const Strengths = () => {
  return (
    <>
      <div className='row content'>
        <h3 className='heading--section text-center'>
          Our Strengths&nbsp;
          <i className='fa-solid fa-earth-asia'></i>
        </h3>
      </div>
      <div className='row content'>
        <div className='col-xl-3 col-lg-6 advantage'>
          <h4>Global Market</h4>
          <img src={advantagePic1} alt='advantage 1' />

          <p>
            First and foremost, offering our services on freelance marketplaces
            provides us with a global marketplace in which to provide our
            services and generate income. In today's world there is no need for
            corporate activity to be slowed due to regional or even national
            events. Only global factors drive success.
          </p>
        </div>
        <div className='col-xl-3 col-lg-6 advantage'>
          <h4>Flexibility</h4>
          <img src={advantagePic2} alt='advantage 2' />
          <p>
            Using freelance support on a project by project basis provides
            organizational flexibility. As needs arise, there is sufficient
            capacity to find suitable resources. In the case of a shortfall of
            available talent, we have several reliable suppliers of contract
            programming services.
          </p>
        </div>
        <div className='col-xl-3 col-lg-6 advantage'>
          <h4>Expertise</h4>
          <img src={advantagePic3} alt='advantage 3' />
          <p>
            Freelance markets have abundant expertise in every area, including
            the wide ranging technologies used in web development. Whether
            ASP.NET or Java Spring Boot, React or Angular, specialists can be
            found in the broad freelance marketplace.
          </p>
        </div>
        <div className='col-xl-3 col-lg-6 advantage'>
          <h4>Perspective</h4>
          <img src={advantagePic4} alt='advantage 4' />
          <p>
            Many of our conversations and collaborations are with people from
            around the world who offer unique and valuable new perspectives to
            our projects.
          </p>
        </div>
      </div>
    </>
  );
};
