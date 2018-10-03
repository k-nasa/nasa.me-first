import React from 'react'
import { Link  } from 'react-router-dom'
import icon from './../assets/icon.jpg'

export default () => (
  <div>
    <header>
      <Link to='/menu' className='menu-button'>
        <div></div>
        <div></div>
        <div></div>
      </Link>
      <div className='text-center bg-gradient-primary'>
        <img className='profile-icon'src={icon} />
      </div>
    </header>

    <div className="container text-center jumbotron">
      <p className='name-profile'>nasa</p>
      <p className="sub-profile lead text-muted">サーバーサイドエンジニア見習いです</p>
      <nav>
        <ul>
          <li><a href='https://twitter.com/htilc' className='btn'>Twitter </a></li>
          <li><a href='https://github.com/k-nasa' className='btn'>GitHub  </a></li>
          <li><a href='https://nasaemon.hateblo.jp/' className='btn'>Blog    </a></li>
          <li><a href='https://www.facebook.com/nasa.x68' className='btn'>Facebook</a></li>
        </ul>
      </nav>
    </div>
  </div>
)
