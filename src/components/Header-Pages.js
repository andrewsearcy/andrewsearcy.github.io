import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioSiteLogoColor from '../Logo/Portfolio Site Logo-Color.png';

const HeaderPages = props => (
  <div className='header'>
    <div className='header-logo-box'>
      <Link to='/' className='links-pages'>
        <img className='header-logo' src={PortfolioSiteLogoColor} alt='Home' />
      </Link>
    </div>
    <div className='header-links'>
      <Link to='/about' className='links-pages-about'>
        About
      </Link>
      <a href='https://drive.google.com/open?id=1os1Bx04C4GU4xzEHK4pwzi58oUsMmEVj' target='_blank' className='links-pages-about'>
        Resume
      </a>
      <Link to='/contact' className='links-pages-contact'>
        Contact
      </Link>
    </div>
  </div>
)

export default HeaderPages;
