import React from 'react'
import './App.css'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </div>
    </Router>
  )
}

export default App
