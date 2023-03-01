import React from 'react';
import './Main.css';
import OfferCard from './components/OfferCard';
import logo from './img/logo.png';
import guitar from './img/guitar.png';
import violence from './img/violence.png';
import drums from './img/drums.png';
import saxophone from './img/saxophone.png';
import telegram from './img/telegram.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';

function Home(props) {
    function message() {
      alert('К сожалению эта страница пока недоступна, но вы можете заказать инструмент по телефону')
    }
    return (
    <body>
      <div className='wrapper'>
        <div className="header">
          <div className='container'>
            <h1 className='header__title title'>
              У нас вы найдете подходящий для себя инструмент
            </h1>
            <p className='header__text'>Мы продаем инструменты практически всех производителей</p>
          </div>
        </div>

        <section className='offer'>
          <div className='container'>
            <h1 className='offer__title title'>
              Вот что мы можем вам предложить
            </h1>
            <div className='offer__list'>
              <OfferCard img={guitar} title="Гитара"/>
              <OfferCard img={violence} title="Скрипка"/>
              <OfferCard img={drums} title="Барабаны"/>
              <OfferCard img={saxophone} title="Саксофон"/>
            </div>
          </div>
        </section>

        <section className='personal'>
          <div className='container'>
            <h1 className='personal__title title'>Инструмент на заказ</h1>
            <p className='peresonal__description'>
              Вы так же можете заказать инструмент у нас, наши мастера сделают его в течении недели.
            </p>
            <button className='personal__button button' href="/Shop.jsx" onClick={message}>Заказать</button>
          </div>
        </section>

        <footer className='footer'>
          <div className='footer-container container'>
            <div className='footer__left'>
              <h3 className='footer__header'>Контакты:</h3>
              <p className='footer__description'><a href='tel:+380999999999'>+ 380 999 999 999</a></p>
              <p className='footer__description'><a href='tel:+380777777777'>+ 380 777 777 777</a></p>
              <h3 className='footer__header'>Email:</h3>
              <p className='footer__description'><a href="mailto:muzshop@example.com">muzshop@example.com</a></p>
            </div>
            <div className='footer__right'>
              <h3 className='footer__header footer__right-header'>Соц. сети:</h3>
              <div className='footer__right-social'>
                <a href='#' className='footer__right-social-item'><img src={telegram}></img></a>
                <a href='#' className='footer__right-social-item'><img src={instagram}></img></a>
                <a href='#' className='footer__right-social-item'><img src={facebook}></img></a>
              </div>
              <a href='#'><img className='footer__right-logo' src={logo}></img></a>
            </div>
          </div>
        </footer>
      </div>
    </body>
    );
}

export default Home;