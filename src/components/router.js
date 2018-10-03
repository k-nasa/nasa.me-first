import React from 'react'
import { Link, HashRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import Profile from './profile'
import Works from './works'
import Menu from './menue'

export default () => (
  <main>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/works" component={Works}/>
      </div>
    </Router>
  </main>
)
