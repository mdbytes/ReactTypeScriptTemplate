import Image from 'next/image';
import React from 'react';

type ImageProps = {
  src: StaticImageData;
  width: number;
  height: number;
  class: string;
  style: object;
  alt: string;
};

const DisplayImage = (props: ImageProps) => {
  return (
    <Image
      src={props.src.src}
      height={props.height}
      width={props.width}
      style={props.style}
      className={props.class}
      alt={props.alt}
    />
  );
};

export default DisplayImage;
