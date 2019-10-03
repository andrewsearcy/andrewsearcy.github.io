import React from "react";
// import BG2 from "../images/BG2.jpg";
import WebsiteArrow from "../images/Website Arrow.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PortfolioLogo from "../Logo/Portfolio Logo.png";
import IMG1 from "../images/IMG1.jpg";
import IMG2 from "../images/IMG2.jpg";
import IMG3 from "../images/IMG3.jpg";
import Fade from "react-reveal/Fade";

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
              <Fade top>
                <h1 className="home-title">
                  My name is <span className="name">Andrew Searcy</span> and I
                  love software developement.
                </h1>
              </Fade>
              <Fade bottom>
                <a className="scroll-icon">
                  <img className="bounce" src={WebsiteArrow} />
                </a>
              </Fade>
            </div>
          </div>
      </div>
      <div className="sec-2">
        <div className="sec-2-content">
          <Fade left>
            <h1 className="title">WORK</h1>
          </Fade>
          <Fade right>
            <div id="line" />
          </Fade>
          <Fade left>
            <p className="workBlurb">
              As a designer and developer based in Tennessee, I believe in
              combining purposeful graphic design and web developement to create
              an unforgetable experience for every user.
            </p>
          </Fade>
        </div>
        <div className="sec-2-work">
          <Fade delay={200}>
            <div className="sec-2-col">
              <a className="work-block">
                <img className="work-block-bg" src={IMG1} />
              </a>
            </div>
          </Fade>
          <Fade delay={400}>
            <div className="sec-2-col">
              <a className="work-block">
                <img className="work-block-bg" src={IMG2} />
              </a>
            </div>
          </Fade>
          <Fade delay={600}>
            <div className="sec-2-col">
              <a className="work-block">
                <img className="work-block-bg" src={IMG3} />
              </a>
            </div>
          </Fade>
        </div>
      </div>
      <div className="contact">
        <Fade left>
          <div className="contact-col1">
            <h3 className="contact-col-c looking">
              Looking for a Software Developer?
            </h3>
          </div>
        </Fade>
        <Fade right>
          <div className="contact-col1">
            <a href="" className="contact-col-c">
              <h1 className="contact-me">Contact Me</h1>
            </a>
          </div>
        </Fade>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
