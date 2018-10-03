import React from 'react'
import { Link  } from 'react-router-dom'
import icon from './../assets/icon.jpg'

export default () => (
  <div>
    <header>
      <Link to='/' className='menu-button'>
        <div></div>
        <div></div>
        <div></div>
      </Link>
      <div className='text-center bg-gradient-primary'>
        <img className='profile-icon'src={icon} />
      </div>
    </header>
  </div>
)
