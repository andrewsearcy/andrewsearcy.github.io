import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PortfolioLogo from "../Logo/Portfolio Logo.png";
import Responsive from "../images/Responsive.png";
import Fast from "../images/Fast.png";
import Creative from "../images/Creative.png";
import Team from '../images/Team.png';
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";


const About = () => (
  <div>
    <div className="about">
      <div className="landing-about">
        <div className="about-header-content">
          <Link to="/" className="links-home">
            <img className="header-logo" src={PortfolioLogo} alt="Home" />
          </Link>
          <Link to="/about" className="links-about">
            About
          </Link>
        </div>
      </div>
      <div className="sec-2">
        <Fade left>
        <h1 className="title">ABOUT</h1>
        </Fade>
        <Fade right>
        <div id="line2" />
        </Fade>
        <div className="sec-2-about">
          <Fade delay={200}>
          <div className="sec-2-col-about">
            <a className="about-block">
              <img className="about-block-bg" src={Responsive} />
              <h2 className="textUnder">Responsive</h2>
              <p className='about-text'>My designs will work on any device, big or small.</p>
            </a>
          </div>
          </Fade>
          <Fade delay={400}>
          <div className="sec-2-col-about">
            <a className="about-block">
              <img className="about-block-bg" src={Creative} />
              <h2 className="textUnder">Creative</h2>
              <p className='about-text'>My creativity grabs the users attention. A priority.</p>
            </a>
          </div>
          </Fade>
          <Fade delay={600}>
          <div className="sec-2-col-about">
            <a className="about-block">
              <img className="about-block-bg" src={Fast} />
              <h2 className="textUnder">Fast</h2>
              <p className='about-text'>My code is always written with fast load time in mind.</p>
            </a>
          </div>
          </Fade>
          <Fade delay={800}>
          <div className="sec-2-col-about">
            <a className="about-block">
              <img className="about-block-bg" src={Team} />
              <h2 className="textUnder">Team</h2>
              <p className='about-text'>I enjoy collaberating with others to make a project come to life.</p>
            </a>
          </div>
          </Fade>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
);

export default About;
