import React from 'react'
import Footer from '../components/Footer'
import HeaderPages from '../components/Header-Pages'
import Responsive from '../images/Responsive.png'
import Fast from '../images/Fast.png'
import Creative from '../images/Creative.png'
import Team from '../images/Team.png'
import Fade from 'react-reveal/Fade'
import ProfilePic from '../images/ProfilePic.JPG'
import Titles from '../components/Titles'
import ScrollUpButton from '../components/ScrollUpButton'
const About = () => (
  <div>
    <Fade>
      <div className='about'>
        <div className='overlay-pages'>
          <HeaderPages />
          <div className='about-mid'>
            <Titles title='A little about me.' />
            <section className='sec-1'>
            <Fade left>
              <div className = 'about-pic-col'>
                <div className='sec-1-pic'>
                  <img
                    src={ProfilePic}
                    alt='profilePic'
                    className='sec-1-row-pic'
                  />
                </div>
              </div>
              </Fade>
              <Fade right>
              <div className='sec-1-block'>
                <div className='sec-1-row-block'>
                  <h1 className='name'>Andrew Searcy</h1>
                  <h4 className='about-pic-text'>
                    Software Developer & UX/UI Designer
                  </h4>
                  <p className='sec-1-about-text'>
                    I am a Software Developer with abilities in both the back
                    end and front end of the application. My previous career as
                    a designer and creative director has lead me into this
                    passion of building web applications. I love the design
                    side, however, I wasn’t satisfied with just being involved
                    with the visual part of the project but wanted to be able to
                    create from the technical side as well.
                  </p>
                  <p className='sec-1-about-text'>
                    I love what I do and my passion is growing everyday. Be on
                    the lookout for new designs/apps I will be posting either in
                    my projects section or updates to this site!
                  </p>
                </div>
              </div>
              </Fade>
            </section>
            <div className='sec-2-about'>
              <Fade delay={200}>
                <div className='sec-2-col-about'>
                  <a className='about-block'>
                    <div className='about-block-bg'>
                      <img className='about-block-icon' src={Responsive} />
                    </div>
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
                    <div className='about-block-bg'>
                      <img className='about-block-icon' src={Creative} />
                    </div>
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
                    <div className='about-block-bg'>
                      <img className='about-block-icon' src={Fast} />
                    </div>
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
                    <div className='about-block-bg'>
                      <img className='about-block-icon' src={Team} />
                    </div>
                    <h2 className='textUnder'>Team</h2>
                    <p className='about-text'>
                      My collaberation with others will make things come to
                      life.
                    </p>
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <Footer />
    <ScrollUpButton />
  </div>
)

export default About
