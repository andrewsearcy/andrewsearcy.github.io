import React from "react";
// import BG2 from "../images/BG2.jpg";
import WebsiteArrow from "../images/Website Arrow.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PortfolioLogo from "../Logo/Portfolio Logo.png";
import IMG1 from "../images/IMG1.jpg";
import IMG2 from "../images/IMG2.jpg";
import IMG3 from "../images/IMG3.jpg";

const Home = () => (
  <div>
    <div className="home">
      <div className="overlay">
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
        <div className="landing-mid">
          <div className="landing-row-1">
            <h1 className="home-title">
              My name is <span className="name">Andrew Searcy</span>, I love
              developement & design.
            </h1>
            <a className="scroll-icon">
              <img className="bounce" src={WebsiteArrow} />
            </a>
          </div>
        </div>
      </div>
      <div className="sec-2">
        <div className="sec-2-content">
          <h1 className="title">WORK</h1>
          <div id="line" />
          <p className="workBlurb">
            As a designer and developer based in Tennessee, I believe in
            combining purposeful graphic design and web developement to create
            an unforgetable experience for every user.
          </p>
        </div>
        <div className="sec-2-work">
          <div className="sec-2-col">
            <a className="work-block">
              <img className="work-block-bg" src={IMG1} />
            </a>
          </div>
          <div className="sec-2-col">
            <a className="work-block">
              <img className="work-block-bg" src={IMG2} />
            </a>
            </div>
            <div className="sec-2-col">
            <a className="work-block">
              <img className="work-block-bg" src={IMG3} />
            </a>
            </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
