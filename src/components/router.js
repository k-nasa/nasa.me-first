import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import Profile from './profile'
import Header from './header'

export default () => (
  <main>
    <Router>
      <div>
        <Route exact path="" component={Home}/>
        <Route path="/sub" component={Profile}/>
        <Header/>
      </div>
    </Router>
  </main>
)
