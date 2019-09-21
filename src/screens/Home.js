import React from "react";
import BG2 from "../images/BG2.jpg";
import WebsiteArrow from '../images/Website Arrow.png';


const Home = () => (
  <div>
    <div className="landing">
      <div className="home-row-1">
        <h1 className="home-title">
          My name is Andrew Searcy, I love developement & design.
        </h1>
      </div>
      <div className='sec-3'>
      <a className='scroll-icon'><img src={WebsiteArrow}/></a>
      </div>
      <div className="sec-2">
        <h1 className="title">WORK.</h1>
        <p className='workBlurb'>
          As a designer and developer based in Tennessee, I believe in combining purposeful
          graphic design and web developement to create an unforgetable experience for every user.
        </p>
      </div>
      <div class='pic-grid'> 
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
      </div>
    </div>
  </div>
);

export default Home;
