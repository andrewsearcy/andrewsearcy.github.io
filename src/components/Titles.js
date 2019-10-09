import React from 'react'
import Fade from 'react-reveal/Fade'

const Titles = props => (
  <div className='titles'>
    <Fade left>
      <h1 className='title'>{props.title}</h1>
    </Fade>
    <Fade right>
      <div id='line' />
    </Fade>
  </div>
)

export default Titles
