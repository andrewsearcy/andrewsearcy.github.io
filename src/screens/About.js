import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import PortfolioLogo from '../Logo/Portfolio Logo.png'
import Responsive from '../images/Responsive.png'
import Fast from '../images/Fast.png'
import Creative from '../images/Creative.png'
import Team from '../images/Team.png'
import Fade from 'react-reveal/Fade'
import ProfilePic from '../images/ProfilePic.JPG'

const About = () => (
  <div>
    <Fade>
      <div className='about'>
        <div className='landing-about'>
          <div className='about-header-content'>
            <Link to='/' className='links-about'>
              <img className='header-logo' src={PortfolioLogo} alt='Home' />
            </Link>
            <Link to='/about' className='links-about'>
              About
            </Link>
          </div>
        </div>
        <div className='sec-2'>
          <Fade left delay={350}>
            <h1 className='title'>ABOUT</h1>
          </Fade>
          <Fade right delay={350}>
            <div id='line2' />
          </Fade>
          <div className='sec-1'>
            <div className='sec-1-pic'>
              <img src={ProfilePic} alt='profilePic' className='sec-1-row-pic'></img>
            </div>
            <div className='sec-1-block'>
              <div className='sec-1-row-block'>
                <h1 className='name'>Andrew Searcy</h1>
                <p className='sec-1-about-text'>
                  I am a Software Developer with abilities in both the back end
                  and front end of the application. My previous career as a
                  designer and creative director lead me into this passion of
                  building web applications. I love the design side, however, I
                  wasn’t satisfied with just being involved with the visual part
                  of the project but wanted to be able to create from the
                  technical side as well. In this next phase of my career I want
                  to combine my abilities to create visually appealing
                  applications with the technical facets. My “perfect world“
                  company would allow me to work with a small team of (5-8)
                  people that follow Agile best practices and continually learn
                  and grow together as developers.
                </p>
              </div>
            </div>
          </div>
          <div className='sec-2-about'>
            <Fade delay={200}>
              <div className='sec-2-col-about'>
                <a className='about-block'>
                  <img className='about-block-bg' src={Responsive} />
                  <h2 className='textUnder'>Responsive</h2>
                  <p className='about-text'>
                    My designs will work on any device, big or small.
                  </p>
                </a>
              </div>
            </Fade>
            <Fade delay={400}>
              <div className='sec-2-col-about'>
                <a className='about-block'>
                  <img className='about-block-bg' src={Creative} />
                  <h2 className='textUnder'>Creative</h2>
                  <p className='about-text'>
                    My creativity grabs the users attention. A priority.
                  </p>
                </a>
              </div>
            </Fade>
            <Fade delay={600}>
              <div className='sec-2-col-about'>
                <a className='about-block'>
                  <img className='about-block-bg' src={Fast} />
                  <h2 className='textUnder'>Fast</h2>
                  <p className='about-text'>
                    My code is always written with fast load time in mind.
                  </p>
                </a>
              </div>
            </Fade>
            <Fade delay={800}>
              <div className='sec-2-col-about'>
                <a className='about-block'>
                  <img className='about-block-bg' src={Team} />
                  <h2 className='textUnder'>Team</h2>
                  <p className='about-text'>
                    I enjoy collaberating with others to make a project come to
                    life.
                  </p>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
    <Footer />
  </div>
)

export default About
