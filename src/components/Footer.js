import React from 'react'
import FBicon from '../images/FBicon.png'
import IGicon from '../images/IGicon.png'
import LIicon from '../images/LIicon.png'
import GHicon from '../images/GHicon.png'

const Footer = () => (
  <div>
    <div className='footer'>
      <div className='footer-col'>
        <div className='social-icons'>
          <a href=''>
            <img src={LIicon} className='Sicons' />
          </a>
          <a href=''>
            <img src={GHicon} className='Sicons' />
          </a>
          <a href=''>
            <img src={IGicon} className='Sicons' />
          </a>
          <a href=''>
            <img src={FBicon} className='Sicons' />
          </a>
        </div>
        <p className='footer-title'>Andrew Searcy ©2019</p>
      </div>
    </div>
  </div>
)

export default Footer
