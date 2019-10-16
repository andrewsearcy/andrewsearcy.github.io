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
import webIcon from '../images/web-icon.png'
import artist from '../images/artist.png'
import design from '../images/design.png'

const About = () => (
  <div>
    <Fade>
      <div className='about'>
        <div className='overlay-pages'>
          <HeaderPages />
          <div className='about-mid'>
            <Titles title='A little about me.' />
            <Fade bottom>
              <section className='skills'>
                <div className='skills-col-first'>
                  <div className='skills-icon-col'>
                    <img
                      src={webIcon}
                      alt='Developer'
                      className='skills-icon'
                    />
                  </div>
                  <h2 className='skills-col-1'>Developer</h2>
                  <div className='skills-text'>
                    <p>
                      I value building things that are simple yet clean and
                      structured.
                    </p>
                  </div>
                  <div className='skills-text'>
                    <p className='skills-text-color'>Languages & Frameworks</p>
                    <p>JavaScript, CSS3, Sass, ReactJS, HTML5</p>
                  </div>
                  <div className='skills-text'>
                    <p className='skills-text-color'>Dev Tools</p>
                    <p>Visual Studio Code</p>
                    <p>Git</p>
                    <p>Travis CI</p>
                    <p>AWS</p>
                    <p>Dependency Injection</p>
                    <p>NPM</p>
                  </div>
                </div>
                <div className='skills-col-sec'>
                  <div className='skills-icon-col'>
                    <img src={design} alt='Design' className='skills-icon' />
                  </div>
                  <h2 className='skills-col-1'>Designer</h2>
                  <div className='skills-text'>
                    <p>
                      I love the creative process and product that comes from
                      thoughtful design.
                    </p>
                  </div>
                  <div className='skills-text'>
                    <p className='skills-text-color'>Design Products</p>
                    <p>UX, UI, Web, Apps, Logos, Print</p>
                  </div>
                  <div className='skills-text'>
                    <p className='skills-text-color'>Design Tools</p>
                    <p>Adobe Creative Suite</p>
                    <p>Sketch</p>
                    <p>Over</p>
                    <p>WordPress</p>
                    <p>Illustrator</p>
                    <p>InDesign</p>
                  </div>
                </div>
                <div className='skills-col-third'>
                  <div className='skills-icon-col'>
                    <img src={artist} alt='Artist' className='skills-icon' />
                  </div>
                  <h2 className='skills-col-1'>Artist</h2>
                  <div className='skills-text'>
                    <p>
                      My passion for artistry takes different forms but each has
                      its uniquness.
                    </p>
                  </div>
                  <div className='skills-text'>
                    <p className='skills-text-color'>Creations & Services</p>
                    <p>Photo, Video, and Audio Production</p>
                  </div>
                  <div className='skills-text'>
                    <p className='skills-text-color'>Art Tools</p>
                    <p>Ableton Live</p>
                    <p>Reason</p>
                    <p>After Affects</p>
                    <p>Final Cut Pro</p>
                    <p>Lightroom</p>
                    <p>Premier Pro</p>
                  </div>
                </div>
              </section>
              </Fade>
              <section className='quote-two'>
              <Fade right>
              <div className='quote-text-two'>
                <p>
                  "True humility is not thinking less of yourself; it is
                  thinking of yourself less."
                </p>
              </div>
              <div>
                <p className='quote-text-ref'>- C.S. Lewis</p>
              </div>
              </Fade>
            </section>
            <section className = 'sec-1'>
                <Fade left>
                  <div className='about-pic-col'>
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
                        I am a Software Developer with abilities in both the
                        back end and front end of the application. My previous
                        career as a designer and creative director has lead me
                        into this passion of building web applications. I love
                        the design side, however, I wasn’t satisfied with just
                        being involved with the visual part of the project but
                        wanted to be able to create from the technical side as
                        well.
                      </p>
                      <p className='sec-1-about-text'>
                        I love what I do and my passion is growing everyday. Be
                        on the lookout for new designs/apps I will be posting
                        either in my projects section or updates to this site!
                      </p>
                    </div>
                  </div>
                </Fade>
            </section>
            <div className='sec-2-about'>
              <Fade delay={200}>
                <div className='sec-2-col-about'>
                  <div className='about-block'>
                    <div className='about-block-bg'>
                      <img
                        alt='Responsive'
                        className='about-block-icon'
                        src={Responsive}
                      />
                    </div>
                    <h2 className='textUnder'>Responsive</h2>
                    <p className='about-text'>
                      My designs will work on any device, big or small.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade delay={400}>
                <div className='sec-2-col-about'>
                  <div className='about-block'>
                    <div className='about-block-bg'>
                      <img
                        alt='Creative'
                        className='about-block-icon'
                        src={Creative}
                      />
                    </div>
                    <h2 className='textUnder'>Creative</h2>
                    <p className='about-text'>
                      My creativity grabs the users attention. A priority.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade delay={600}>
                <div className='sec-2-col-about'>
                  <div className='about-block'>
                    <div className='about-block-bg'>
                      <img alt='Fast' className='about-block-icon' src={Fast} />
                    </div>
                    <h2 className='textUnder'>Fast</h2>
                    <p className='about-text'>
                      My code is always written with fast load time in mind.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade delay={800}>
                <div className='sec-2-col-about'>
                  <div className='about-block'>
                    <div className='about-block-bg'>
                      <img alt='Team' className='about-block-icon' src={Team} />
                    </div>
                    <h2 className='textUnder'>Team</h2>
                    <p className='about-text'>
                      My collaberation with others will make things come to
                      life.
                    </p>
                  </div>
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
