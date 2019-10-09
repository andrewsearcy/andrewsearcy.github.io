import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioSiteLogo from '../Logo/Portfolio Site Logo.png';

const HeaderHome = props => (
  <div className='header'>
    <div className='header-logo-box'>
      <Link to='/' className='links-home'>
        <img className='header-logo' src={PortfolioSiteLogo} alt='Home' />
      </Link>
    </div>
    <div className='header-links'>
      <Link to='/about' className='links-home-about'>
        About
      </Link>
      <a href='https://drive.google.com/open?id=1os1Bx04C4GU4xzEHK4pwzi58oUsMmEVj' target='_blank' className='links-home-about'>
        Resume
      </a>
      <Link to='/contact' className='links-home-contact'>
        Contact
      </Link>
    </div>
  </div>
)

export default HeaderHome
