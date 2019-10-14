import React from 'react'
import FBicon from '../images/FBicon.png'
import IGicon from '../images/IGicon.png'
import LIicon from '../images/LIicon.png'
import GHicon from '../images/GHicon.png'
import PortfolioSiteLogo from '../Logo/Portfolio Site Logo.png';

const Footer = () => (
  <footer>
    <div className='footer'>
      <img className='footer-logo' alt="Logo" src={PortfolioSiteLogo}></img>
      <p className='pre-quote'>I am all about one thing.</p>
      <h2 className='quote'>Living life to give it.</h2>
      <div className='footer-col'>
        <div className='social-icons'>
          <a href='https://www.linkedin.com/in/andrew-searcy-45013333'>
            <img src={LIicon} alt='LinkedIn' className='Sicons' />
          </a>
          <a href='https://www.github.com/andrewsearcy'>
            <img src={GHicon} alt='GitHub' className='Sicons' />
          </a>
          <a href='https://www.instagram.com/andrewsearcy'>
            <img src={IGicon} alt='Instagram' className='Sicons' />
          </a>
          <a href='https://facebook.com/andrew.searcy'>
            <img src={FBicon} alt='Facebook' className='Sicons' />
          </a>
        </div>
        <div className='footer-title'>Handcrafted by yours truly © twentynineteen</div>
      </div>
    </div>
  </footer>
)

export default Footer
