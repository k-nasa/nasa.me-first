import React from 'react'
import { Link } from 'react-router-dom'
import icon from './../assets/icon.jpg'
import lineBotImage from '../assets/line-book-bot.jpg'
import portfolioSite from '../assets/portfolio_site.png'
import rmemo from '../assets/rmemo.png'
import boono from '../assets/boono.png'
import boono2 from '../assets/boono2.png'
import '../style/works.css'

export default () => (
  <div className='menu works'>
    <header>
      <nav calssName='nav'>
        <Link to='/' className='menu-close-button'>
          <div></div>
          <div></div>
        </Link>
      </nav>
      <div className='text-center bg-gradient-primary'>
        <img className='profile-icon' src={icon} />
      </div>
    </header>
    <div className='raw'>
      <div className='cards row'>
        <div className='card col-md-5'>
          <a href='https://github.com/k-nasa/BoonoMobile'>
            <img class="card-img-top" src={boono} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title text-center">Boono Mobile</h5>
              <p class="card-text">
                クロスプラットフォームアプリ開発SDKのFlutterを使って開発した漫画ラノベの発売通知アプリです。<br />
                BLoCアーキテクチャを用いてState管理を行っています。<br />
                テストコードも割りかししっかり書いてあるので,もしかしたらFlutterTestの参考になるかも？
            </p>
            </div>
          </a>
        </div>
        <div className='card col-md-5'>
          <a href='https://github.com/k-nasa/BoonoAPI'>
            <img class="card-img-top" src={boono2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title text-center carrer">Boono API</h5>
              <p class="card-text">
                BoonoMobileのバックエンドAPIです。今回はアプリに集中したかったのでRailsでぱぱっと実装しました。<br />
                AmazonAPIが微妙な作りになっていたので書籍データの取得に思いの外苦戦しました<br />
              </p>
            </div>
          </a>
        </div>
        <div className='card col-md-5'>
          <a href='https://github.com/k-nasa/line-book-bot'>
            <img class="card-img-top" src={lineBotImage} alt="Line Book Bot" />
            <div class="card-body">
              <h5 class="card-title text-center carrer">Line Book Bot</h5>
              <p class="card-text">
                BoonoMobileのline botバージョン。こっちが先だったけど。<br />
                運用が面倒になったので現在は可動していません。
            </p>
            </div>
          </a>
        </div>
        <div className='card col-md-5'>
          <a href='https://github.com/k-nasa/rmemo'>
            <img class="card-img-top image" src={rmemo} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title text-center carrer">rmemo</h5>
              <p class="card-text">
              CLIでメモをぱぱっと取るためのコマンド<br/>
              メモを取るだけでなく、メモをすばやく見つけて編集、削除が出来ます。<br/>
              結構需要あると思ってたんですが、全く使ってもらえず、、、<br/>
              Rustで実装しました。
              </p>
            </div>
          </a>
        </div>
        <div className='card col-md-5'>
          <a href='https://github.com/k-nasa/nasa.me'>
            <img class="card-img-top image" src={portfolioSite} alt="ポートフォリオサイト" />
            <div class="card-body">
              <h5 class="card-title text-center carrer">ポートフォリオサイト</h5>
              <p class="card-text">
              今見てるサイトです。<br/>
              技術的にはReact.jsを使ってSPAにしています。<br/>
              デザインはゴミみたいな感じですが多めに見てください。<br/>
              CSS難しンゴ
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
)
