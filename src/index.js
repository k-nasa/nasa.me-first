import React from 'react'
import { render } from 'react-dom'
import Router from './components/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'

const App = () => (
  <div>
    <Router/>
  </div>
)
render(
  <App/>,
  document.getElementById('root')
)

