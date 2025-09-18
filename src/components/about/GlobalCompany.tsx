import globalCompanyPic1 from '../../assets/images/WebDevCustom.png';
import globalCompanyPic2 from '../../assets/images/OnlineMeeting.png';
import study from '../../assets/images/team-landscape.png';
import Image from 'next/image';

export const GlobalCompany = () => {
  return (
    <>
      <div className='overview'>
        <h3 className='heading--section animate__animated animate__fadeInRightBig'>
          <span className='logo-font'>md</span>
          <span className='name-font'>Bytes</span>&nbsp;
        </h3>
      </div>

      <div className='row' id='who-we-are-global'>
        <div className='col-xl-3 community-content'>
          <div className='global-company-image left animate__animated animate__fadeInLeftBig'>
            <Image
              src={globalCompanyPic1}
              alt='global company'
              className='img-fluid'
            />
          </div>
        </div>

        <div className='col-lg-9  community-content animate__animated animate__fadeInUpBig'>
          <div className='content'>
            <p>
              Headquartered in Cedar Rapids, Iowa, MD Bytes lives and breaths by
              the power of the global freelance market for development services.
            </p>
            <p>
              <Image src={study} alt={'study'} />
              According to a{' '}
              <a
                href='https://flexiple.com/freelance/freelance-statistics-and-trends-2020/'
                target='_blank'
                rel='noreferrer'
              >
                recent study
              </a>
              ,{' '}
              <b>freelance employees currently total 58 million in the U.S.</b>
              &nbsp;and are poised to become the majority of the workforce by
              2027. The same study reports that Google employs more freelancers
              (120,000) than they have permanent employees (102,000). Moreover,
              nearly <b>50% of all businesses</b> use freelance support.{' '}
            </p>

            <p>
              {' '}
              At times, we are working collaboratively for others on sites such
              as{' '}
              <a href='https://upstackhq.com/' target='_blank' rel='noreferrer'>
                UpStack
              </a>
              ,&nbsp;
              <a
                href='https://www.upwork.com/'
                target='_blank'
                rel='noreferrer'
              >
                UpWork
              </a>
              ,&nbsp;
              <a
                href='https://www.toptal.com/'
                target='_blank'
                rel='noreferrer'
              >
                Toptal
              </a>
              , or{' '}
              <a href='https://www.guru.com/' target='_blank' rel='noreferrer'>
                Guru
              </a>
              . At other times, we are including other developers in our
              projects. And at times, depending on work flow or type, some
              projects are done completely in house.
            </p>
            <p>
              Using the freelance marketplace both as a source of revenue and
              resources as needed offers many benefits:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
