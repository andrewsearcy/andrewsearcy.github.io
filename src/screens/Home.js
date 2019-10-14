import React from 'react'
import WebsiteArrow from '../images/Website Arrow.png'
import Footer from '../components/Footer'
import HeaderHome from '../components/Header'
import { Link } from 'react-router-dom'
import IMG1 from '../images/IMG1.jpg'
import IMG2 from '../images/IMG2.jpg'
import IMG3 from '../images/IMG3.jpg'
import Fade from 'react-reveal/Fade'
import Titles from '../components/Titles'
import ScrollUpButton from '../components/ScrollUpButton'

const Home = () => (
  <div>
    <Fade>
      <div className='home'>
        <div className='overlay'>
          <HeaderHome />
          <div className='landing-mid'>
            <div className='landing-row-1'>
              <Fade top delay={350}>
                <span className='home-title'>
                  Hi, my name is <span className='name'>Andrew Searcy</span>.
                  <div className='name-blurb'>
                    I'm a Full Stack Software Developer from Tennessee.
                  </div>
                </span>
              </Fade>
              <Fade bottom delay={350}>
                <a className='scroll-icon'>
                  <img className='bounce' src={WebsiteArrow} />
                </a>
              </Fade>
            </div>
          </div>
        </div>
        <div className='sec-2'>
          <div className='sec-2-content'>
            <Titles title='My recent work.' />
            <Fade left>
              <p className='workBlurb'>
                Here are a few of my most recent projects for you to check out.
                There are more coming so make sure to keep checking.
              </p>
            </Fade>
          </div>
          <div className='sec-2-work'>
            <Fade delay={200}>
              <div className='sec-2-col'>
                <a className='work-block'>
                  <img className='work-block-bg' src={IMG1} />
                </a>
              </div>
            </Fade>
            <Fade delay={400}>
              <div className='sec-2-col'>
                <a className='work-block'>
                  <img className='work-block-bg' src={IMG2} />
                </a>
              </div>
            </Fade>
            <Fade delay={600}>
              <div className='sec-2-col'>
                <a className='work-block'>
                  <img className='work-block-bg' src={IMG3} />
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className='contact-section'>
          <Fade left>
            <div className='contact-col1'>
              <h3 className='contact-col-c looking'>
                Looking for a Software Developer?
              </h3>
            </div>
          </Fade>
          <Fade right>
            <div className='contact-col1'>
              <Link to='/contact' className='contact-col-c'>
                <h1 className='contact-me'>Contact Me</h1>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
    <Footer />
    <ScrollUpButton />
  </div>
)

export default Home
