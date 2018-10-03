import React from 'react'
import { Link  } from 'react-router-dom'
import icon from './../assets/icon.jpg'

export default () => (
  <div className='menu'>
    <nav calssName='nav'>
      <Link to='/' className='menu-close-button'>
        <div></div>
        <div></div>
      </Link>
    <Link to='profile'>
      <div class="card">
        <img class="card-img-top" src={icon} alt="icon"/>
          <div class="card-body">
            <h5 class="card-title">Profile</h5>
            <p class="card-text">
            RustとかDartを書いてる人。サーバーサイドエンジニア見習い。お仕事ではRails/Reactを書いてる
            </p>
          </div>
        </div>
    </Link>
    <Link to='works'>
      <div class="card">
        <img class="card-img-top" src={icon} alt="icon"/>
          <div class="card-body">
            <h5 class="card-title">Works</h5>
            <p class="card-text">
            今まで作った作品紹介
            </p>
          </div>
        </div>
        </Link>
      </nav>
  </div>
)