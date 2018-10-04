import React from 'react'
import { Link } from 'react-router-dom'
import icon from './../assets/icon.jpg'
import '../style/profile.css'

export default () => (
  <div className='menu profile'>
    <header>
    <nav calssName='nav'>
      <Link to='/' className='menu-close-button'>
        <div></div>
        <div></div>
      </Link>
    </nav>
      <div className='text-center bg-gradient-primary'>
        <img className='profile-icon'src={icon} />
      </div>
    </header>
      <div className='raw'>
      <div className='cards '>
        <div className='card'>
          <div class="card-body">
            <h5 class="card-title text-center">About me</h5>
            <p class="card-text">
              どうもナサです。1998年生まれ。本名は近藤アサン。福岡出身&&在住の大学生です。<br/>
              React.jsを始めとしたフロントからRails,によるサーバーサイド開発をやっています。<br/>
              このサイトを見ての通りデザインセンスは旅に出ていますが器用貧乏になるのは怖いので諦めています。<br/>
              とりあえず当面はサーバーサイドをメインとしてやっていきます！<br/>
              好きな言語はDart,Rustです！(書けるとは言ってない。書けないとも言ってないけど)<br/>
              あ。嫌いな言語はGoです！<br/>
              <br/>
              PS. <a href='https://findy-code.io/'>ファインディ</a>のスキル偏差値が56から急に46になって複雑な気持ち<br/>
            </p>
          </div>
        </div>
        <div className='card'>
          <div class="card-body">
            <h5 class="card-title text-center carrer">Carrer</h5>
            <p class="card-text">
              <li>Money Forward  エンジニアバイト (18/1 ~ )</li>
              <li>エウレカ        エンジニアインターン (19/9/4 ~ 9/14)</li>
            </p>
          </div>
        </div>
        </div>
      </div>
  </div>
)
