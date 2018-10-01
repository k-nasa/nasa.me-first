import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import Profile from './profile'

export default () => (
  <Router>
    <div>
      <Route exact path="" component={Home}/>
      <Route path="/sub" component={Profile}/>
    </div>
  </Router>
)

