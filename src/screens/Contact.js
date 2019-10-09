import React from 'react'
import HeaderPages from '../components/Header-Pages'
import Footer from '../components/Footer'
import Titles from '../components/Titles'
import Fade from 'react-reveal/Fade'
import ContactForm from '../components/ContactForm'

const Contact = props => (
  <div>
    <Fade>
      <div className='contact'>
        <div className='overlay-pages'>
          <HeaderPages></HeaderPages>
          <div className='landing-mid'>
          <Titles title="We should chat." />
          </div>
          <ContactForm />
          <Footer />
        </div>
      </div>
    </Fade>
  </div>
)

export default Contact
