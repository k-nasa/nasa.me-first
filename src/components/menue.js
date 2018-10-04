import React from 'react'
import { Link } from 'react-router-dom'
import '../style/menu.css'

export default () => (
  <div className='menu'>
    <nav calssName='nav'>
      <Link to='/' className='menu-close-button'>
        <div></div>
        <div></div>
      </Link>
      <div className='cards card-links'>
        <Link to='profile' className='card'>
          <div class="card-body">
            <h5 class="card-title">Profile</h5>
            <p class="card-text">
              RustとかDartを書いてる人。サーバーサイドエンジニア見習い。<br/>
              お仕事ではRails/Reactを書いてる
              </p>
          </div>
        </Link>
        <Link to='works' className='card'>
          <div class="card-body">
            <h5 class="card-title">Works</h5>
            <p class="card-text">
              今まで作った作品紹介
              </p>
          </div>
        </Link>
      </div>
    </nav>
  </div>
)