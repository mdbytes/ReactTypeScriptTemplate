export type SliderProps = {
  slides: {
    image: string;
    alt: string;
    title: string;
    link: string;
  }[];
};

export const slides = [
  {
    image: '/images/careers.jpeg',
    alt: 'careers',
    title: 'Careers Employment Application',
    link: 'https://careers.mdbytes.us/',
  },
  {
    image: '/images/college.jpeg',
    alt: 'college theme',
    title: 'Institutional model',
    link: 'https://college.mdbytes.us/',
  },
  {
    image: '/images/north-park.jpeg',
    alt: 'north park',
    title: 'North Park Colorado',
    link: 'https://north.park.mdbytes.us/',
  },
  {
    image: '/images/wild-things.jpeg',
    alt: 'wild things',
    title: 'Wild Things Photography',
    link: 'https://www.gowildthings.com/',
  },
  {
    image: '/images/money-matters.jpeg',
    alt: 'money matters',
    title: 'Money Matters',
    link: 'https://financial-calculators-six.vercel.app/',
  },
];
