'use client';

import { useEffect } from 'react';

export const BackToTop = () => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-require-imports */
    require('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return (
    <div id='back-to-top'>
      <button onClick={() => backToTop()}>
        <i className='fa-solid fa-circle-up'></i>
      </button>
    </div>
  );
};
