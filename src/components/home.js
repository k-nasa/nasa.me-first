import React from 'react'
import { Link  } from 'react-router-dom'

export default () => (
  <div>
    Home
    <Link to='/sub'>
      <p>sub</p>
    </Link>
  </div>
)

