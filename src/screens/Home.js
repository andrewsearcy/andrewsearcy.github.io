import React from 'react'
import BG2 from '../images/BG2.jpg'
import WebsiteArrow from '../images/Website Arrow.png'
import Footer from '../components/Footer'

const Home = () => (
  <div>
    <div className='landing'>
      <div className='landing-row-1'>
        <h1 className='home-title'>
          My name is Andrew Searcy, I love developement & design.
        </h1>
        <a className='scroll-icon'>
          <img className='bounce' src={WebsiteArrow} />
        </a>
      </div>
      <div className='sec-2' />
      <div className='sec-3'>
        <h1 className='title'>WORK</h1>
        <div id='line' />
        <p className='workBlurb'>
          As a designer and developer based in Tennessee, I believe in combining
          purposeful graphic design and web developement to create an
          unforgetable experience for every user.
        </p>
      </div>
      <div class='pic-grid'>
        <div class='img1' />
        <div class='img2' />
        <div class='img3' />
      </div>
    </div>
    <Footer />
  </div>
)

export default Home
