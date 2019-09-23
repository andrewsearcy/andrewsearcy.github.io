import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PortfolioLogo from "../Logo/Portfolio Logo.png";

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
        <h1 className="title">ABOUT</h1>
        <div id="line" />
      </div>
    </div>
    <Footer></Footer>
  </div>
);

export default About;
