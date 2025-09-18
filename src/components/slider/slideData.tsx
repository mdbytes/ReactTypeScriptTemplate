import careers from '../../assets/images/careers.jpeg';
import college from '../../assets/images/college.jpeg';
import northPark from '../../assets/images/north-park.jpeg';
import moneyMatters from '../../assets/images/money-matters.jpeg';
import wildThings from '../../assets/images/wild-things.jpeg';

export type SliderProps = {
  slides: { image: any; alt: string; title: string; link: string }[];
};

export const slides = [
  {
    image: careers,
    alt: 'careers',
    title: 'Careers Employment Application',
    link: 'https://careers.mdbytes.us/',
  },
  {
    image: college,
    alt: 'college theme',
    title: 'Institutional model',
    link: 'https://college.mdbytes.us/',
  },
  {
    image: northPark,
    alt: 'north park',
    title: 'North Park Colorado',
    link: 'https://north.park.mdbytes.us/',
  },
  {
    image: wildThings,
    alt: 'wild things',
    title: 'Wild Things Photography',
    link: 'https://www.gowildthings.com/',
  },
  {
    image: moneyMatters,
    alt: 'money matters',
    title: 'Money Matters',
    link: 'https://financial-calculators-six.vercel.app/',
  },
];
