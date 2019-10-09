import React from 'react'
import FBicon from '../images/FBicon.png'
import IGicon from '../images/IGicon.png'
import LIicon from '../images/LIicon.png'
import GHicon from '../images/GHicon.png'

const Footer = () => (
  <footer>
    <div className='footer'>
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
        <p className='footer-title'><p className='name'>Andrew Searcy</p> ©2019 All Rights Reserved</p>
      </div>
    </div>
  </footer>
)

export default Footer
