import logo from './img/logo.png';
import guitar from './img/guitar.png';
import violence from './img/violence.png';
import drums from './img/drums.png';
import saxophone from './img/saxophone.png';
import telegram from './img/telegram.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import './App.css';
import OfferCard from './components/OfferCard';

function App() {
  return (
    <body>
      <div className='wrapper'>
        <header className="header">
          <img src={logo} alt=""></img>
          <nav className="header__nav">
            <a href="#" className="header__nav-item">Главня</a>
            <a href="#" className="header__nav-item">Инструменты</a>
            <a href="#" className="header__nav-item">Контакты</a>
          </nav>
          <h1 className='header__title title'>
            У нас вы найдете подходящий для себя инструмент
          </h1>
          <button className='header__button button'>Перейти к выбору</button>
        </header>

        <section className='offer'>
          <h1 className='offer__title title'>
            Вот что мы можем вам предложить
          </h1>
          <div className='offer__list'>
            <OfferCard img={guitar} title="Гитара"/>
            <OfferCard img={violence} title="Скрипка"/>
            <OfferCard img={drums} title="Барабаны"/>
            <OfferCard img={saxophone} title="Саксофон"/>
          </div>
        </section>

        <section className='personal'>
          <h1 className='personal__title title'>Инструмент на заказ</h1>
          <p className='peresonal__description'>
            Вы так же можете заказать инструмент у нас, наши мастера сделают его в течении недели.
          </p>
          <button className='personal__button button'>Заказать</button>
        </section>

        <footer className='footer'>
          <div className='footer__right'>
            <h3 className='footer__header'>Контакты:</h3>
            <p className='footer__description'>+ 380 999 999 999</p>
            <p className='footer__description'>+ 380 777 777 777</p>
            <h3 className='footer__header'>Email:</h3>
            <p className='footer__description'>muzshop@example.com</p>
          </div>
          <div className='footer__left'>
            <h3>Соц. сети:</h3>
            <img src={telegram}></img>
            <img src={instagram}></img>
            <img src={facebook}></img>
            <img src={logo}></img>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default App;
