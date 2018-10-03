import React from 'react'
import { Link  } from 'react-router-dom'
import icon from './../assets/icon.jpg'

export default () => (
  <div>
    <header>
      <button className='menu-button'>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div class='text-center bg-gradient-primary'>
        <img class='profile-icon'src={icon} />
      </div>
    </header>

    <div class="container text-center jumbotron">
      <p class='name-profile'>nasa</p>
      <p class="sub-profile lead text-muted">サーバーサイドエンジニア見習いです</p>
      <nav>
        <ul>
          <li><a href='https://twitter.com/htilc' class='btn'>Twitter </a></li>
          <li><a href='https://github.com/k-nasa' class='btn'>GitHub  </a></li>
          <li><a href='https://nasaemon.hateblo.jp/' class='btn'>Blog    </a></li>
          <li><a href='https://www.facebook.com/nasa.x68' class='btn'>Facebook</a></li>
        </ul>
      </nav>
    </div>
  </div>
)
