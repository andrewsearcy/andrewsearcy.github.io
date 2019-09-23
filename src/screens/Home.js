import React from "react";
import BG2 from "../images/BG2.jpg";
import WebsiteArrow from "../images/Website Arrow.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PortfolioLogo from "../Logo/Portfolio Logo.png";

const Home = () => (
  <div>
    <div className="home">
      <div>
      <div className="landing-home">
        <div className="home-header-content">
          <Link to="/" className="links-home">
            <img className="header-logo" src={PortfolioLogo} alt="Home" />
          </Link>
          <Link to="/about" className="links-about">
            About
          </Link>
        </div>
      </div>
      <div className="landing-row-1">
        <h1 className="home-title">
          My name is Andrew Searcy, I love developement & design.
        </h1>
        <a className="scroll-icon">
          <img className="bounce" src={WebsiteArrow} />
        </a>
      </div>
      </div>
      <div className="sec-2">
        <h1 className="title">WORK</h1>
        <div id="line" />
        <p className="workBlurb">
          As a designer and developer based in Tennessee, I believe in combining
          purposeful graphic design and web developement to create an
          unforgetable experience for every user.
        </p>
      </div>
      <div class="pic-grid">
        <div class="img1" />
        <div class="img2" />
        <div class="img3" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
