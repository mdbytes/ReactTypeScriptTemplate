import React from 'react'
import logo from '../../assets/images/logo.svg'

type PageHeaderProps = {
  page: string;
  icon?: string;
};

export const PageHeader = (props: PageHeaderProps) => {
  const renderIcon = (icon: string): JSX.Element => {
    return <i className={icon}></i>
  }
  return (
    <div className='page-header row'>
      <div className='col-lg-8'>
        <div className='site-info'>
          <div>
            <p className='page-header-title'>
              <span className='logo-font'>md</span> Web Technologies
            </p>
            <div className='jumbotron-header'>
              <img src={logo} className='jumbotron-logo site-logo' alt='logo' />
            </div>
          </div>
        </div>
        <div className='page-header-text'>
          <span className='heading'>{props.page}</span>
          {props.icon ? renderIcon(props.icon) : null}
        </div>
      </div>
    </div>
  )
}
