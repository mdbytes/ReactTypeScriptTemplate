import martinPic from '../../assets/images/martin.jpeg';

const Leadership = () => {
  return (
    <div className='leadership' id='leadership-section'>
      <div className='overview row' id='founder'>
        <h3 className='heading--section text-center'>
          Leadership&nbsp;<i className='fa-solid fa-users'></i>
        </h3>
      </div>

      <div className='row'>
        <div className='col-lg-6 col-xl-4 leader'>
          <h5>Martin Dwyer</h5>
          <p>
            <img src={martinPic} alt='martin' className='img-fluid martin' />
            <b>Founder and CEO Martin Dwyer</b> is a proven leader and innovator
            in the business world. His background includes, among other things,
            over ten years in senior leadership of Fortune 100 companies. Martin
            has his Masters degree in Information Technology with emphasis in
            Software Engineering. He is a proven leader of teams and individuals
            in Fortune 100 companies for over 20 years guiding units and
            divisions that ranged from 8 to 150 team members.
          </p>
          <p>
            He has extensive training and teaching experience, having trained
            individuals and groups of up to 150 on various technical topics
            ranging from software development, economics, finance, mathematics
            and statistics. As a corporate trainer, university instructor and
            now part-time as collegiate tutor.
          </p>
          <p>
            While consulting for GoDaddy in 2016, seeing a need for reliable
            development resources, his focus shifted entirely to software
            development, with an emphasis in web development.
          </p>
        </div>
        <div className='col-lg-6 col-xl-4 leader leader--column-2'>
          <h5>Technology Drives Opportunity</h5>
          <p>
            Martin's business education included common programming languages of
            the day, Basic, Fortran and Cobol. His proficiency at handling large
            databases led to opportunities in analytics early and eventually the
            head of operations for a large corporate bank in Illinois.
          </p>
          <p>
            Martin is proficiency with wide-ranging web server technologies;
            PHP, Java, JSP, Servlets, Spring, Spring Boot, C#, ASP.NET MVC, and
            Node.js. His proficient with NGINX and Apache servers. While
            competent with Microsoft Server, he prefers Linux servers and uses
            Ubuntu desktop as his primary OS.
          </p>
          <p>
            {' '}
            He has been a heavy Linux user for over 20 years and is excited
            about the growth of Linux in recent years. Martin is well acquainted
            with HTML, CSS and JavaScript including React, Angular and other
            modern JavaScript frameworks.
          </p>
          <p>
            Extensive training and experience with computer hardware and network
            technologies. Experience includes building new PC's, rebuilding old
            PC's, upgrading hardware components, designing and configuring
            networks and network technologies.
          </p>
        </div>
        <div className={'leader large-screen-divider'}>
          <hr className={'section mt-5'} />
          <div className={'text-center mb-5'}>leadership (cont'd) </div>
        </div>
        <div className='col-lg-6 col-xl-4 leader leader--column-3'>
          <h5>Solutions Developer</h5>
          <p>
            With a broad business background and experience consulting with
            hundreds of companies, Martin enjoys breaking down business problems
            into software opportunities.
          </p>

          <p>
            Martin enjoys designing solutions, creating effective user
            interfaces, and making business logic come to life in the form of
            software applications.
          </p>

          <h5>Husband, Father, Friend</h5>
          <p>
            More than any of this, Martin is firmly committed to his personal
            roles in life. Husband to Rose. Father to Hollyann, Kyle, Casey and
            Noah. Friend to those with open minds and gentle hearts.
          </p>
          <p>
            Reach out to Martin on{' '}
            <a href='https://www.linkedin.com/in/mdbytes' title='LinkedIn'>
              LinkedIn
            </a>{' '}
            or explore his background, and some of his latest projects at his{' '}
            <a href='https://mdbytes.us' title='Curriculum Vitae'>
              portfolio vitae
            </a>{' '}
            site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
