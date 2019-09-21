import React from 'react'
import './App.css'
import Home from './screens/Home'
import About from './screens/About'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PortfolioLogo from './Logo/Portfolio Logo.png'

function App () {
  return (
    <Router>
      <div className='header'>
        <div className='header-content'>
        <Link to='/' className='links-home'>
          <img className='header-logo' src={PortfolioLogo} alt='Home' />
        </Link>
        <Link to='/about' className='links-about'>
          About
        </Link>
        </div>
      </div>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </div>
    </Router>
  )
}

export default App
