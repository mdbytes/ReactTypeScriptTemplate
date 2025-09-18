import React from 'react';

type PageHeaderProps = {
  page: string;
  icon?: string;
};

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className='page-header'>
      <div className='site-info row container'>
        <span className='heading'>{props.page}</span>
      </div>
    </div>
  );
};
