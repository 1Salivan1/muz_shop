import React from "react";
import InstrumentCard from "../components/InstrumentCard/InstrumentCard";
import logo from "../assets/img/logo.png";
import guitar from "../assets/img/guitar.png";
import violence from "../assets/img/violence.png";
import drums from "../assets/img/drums.png";
import saxophone from "../assets/img/saxophone.png";
import telegram from "../assets/img/telegram.png";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import Button from "../ui/Button/Button";
import Header from "../ui/Header/Header";
import Paragraph from "../ui/Paragraph/Paragraph";

function Home(props) {
  function message() {
    alert(
      "К сожалению эта страница пока недоступна, но вы можете заказать инструмент по телефону"
    );
  }
  return (
    <body>
      <div className="wrapper">
        <div className="header">
          <div className="container">
            <Header text={"У нас вы найдете подходящий для себя инструмент"} />
            <Paragraph
              text={"Мы продаем инструменты практически всех производителей"}
            />
          </div>
        </div>

        <section className="offer">
          <div className="container">
            <Header level={2} text={"Вот что мы можем вам предложить"} />
            <div className="offer__list">
              <InstrumentCard img={guitar} title="Гитара" />
              <InstrumentCard img={violence} title="Скрипка" />
              <InstrumentCard img={drums} title="Барабаны" />
              <InstrumentCard img={saxophone} title="Саксофон" />
            </div>
          </div>
        </section>

        <section className="personal">
          <div className="container">
            <Header text={"Инструмент на заказ"} />
            <Paragraph
              text={
                "Вы так же можете заказать инструмент у нас, наши мастера сделают его в течении недели."
              }
            />
            <Button text={"Заказать"} />
          </div>
        </section>

        <footer className="footer">
          <div className="footer-container container">
            <div className="footer__left">
              <Header level={3} text={"Контакты:"} />
              <p className="footer__description">
                <a href="tel:+380999999999">+ 380 999 999 999</a>
              </p>
              <p className="footer__description">
                <a href="tel:+380777777777">+ 380 777 777 777</a>
              </p>
              <Header level={3} text={"Email:"} />
              <p className="footer__description">
                <a href="mailto:muzshop@example.com">muzshop@example.com</a>
              </p>
            </div>
            <div className="footer__right">
              <Header level={3} text={"Соц. сети:"} />
              <div className="footer__right-social">
                <a href="#" className="footer__right-social-item">
                  <img src={telegram}></img>
                </a>
                <a href="#" className="footer__right-social-item">
                  <img src={instagram}></img>
                </a>
                <a href="#" className="footer__right-social-item">
                  <img src={facebook}></img>
                </a>
              </div>
              <a href="#">
                <img className="footer__right-logo" src={logo}></img>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default Home;
