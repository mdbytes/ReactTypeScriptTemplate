import React, { JSX } from 'react';
import logo from '../../assets/images/logo.svg';
import Image from 'next/image';

type PageHeaderProps = {
  page: string;
  icon?: string;
};

export const PageHeader = (props: PageHeaderProps) => {
  const renderIcon = (icon: string): JSX.Element => {
    return <i className={icon}></i>;
  };
  return (
    <div className='page-header'>
      <div className='site-info row container'>
        <span className='heading'>{props.page}</span>
      </div>
    </div>
  );
};
