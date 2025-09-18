'use client';

import { useEffect } from 'react';

export const BackToTop = () => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
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
