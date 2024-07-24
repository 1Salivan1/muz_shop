import React from "react";
import InstrumentCard from "../../components/InstrumentCard/InstrumentCard";
import guitar from "../../assets/img/guitar.png";
import violence from "../../assets/img/violence.png";
import drums from "../../assets/img/drums.png";
import saxophone from "../../assets/img/saxophone.png";
import telegram from "../../assets/img/telegram.png";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import Button from "../../ui/Button/Button";
import Header from "../../ui/Typography/Header/Header";
import Paragraph from "../../ui/Typography/Paragraph/Paragraph";
import Link from "../../ui/Typography/Link/Link";
import style from "./main.module.css";

function Home(props) {
  function message() {
    alert(
      "К сожалению эта страница пока недоступна, но вы можете заказать инструмент по телефону"
    );
  }
  return (
    <body>
      <div className="wrapper">
        <div className={style["header"]}>
          <div className="container">
            <Header mb={"20px"}>
              У нас вы найдете подходящий для себя инструмент
            </Header>
            <Paragraph>
              Мы продаем инструменты практически всех производителей
            </Paragraph>
          </div>
        </div>

        <section className={style["offer"]}>
          <div className="container">
            <Header level={2} mb={"50px"}>
              Вот что мы можем вам предложить
            </Header>
            <div className={style["offer__list"]}>
              <InstrumentCard img={guitar} title="Гитара" />
              <InstrumentCard img={violence} title="Скрипка" />
              <InstrumentCard img={drums} title="Барабаны" />
              <InstrumentCard img={saxophone} title="Саксофон" />
            </div>
          </div>
        </section>

        <section className={style["personal"]}>
          <div className="container">
            <Header mb={"20px"}>Инструмент на заказ</Header>
            <Paragraph mb={"20px"}>
              Вы так же можете заказать инструмент у нас, наши мастера сделают
              его в течении недели.
            </Paragraph>
            <Button>Заказать</Button>
          </div>
        </section>

        <footer className={style["footer"]}>
          <div className="container">
            <div className={style["footer-container"]}>
              <div className={style["footer-left"]}>
                <Header level={3} mb={"20px"}>
                  Контакты:
                </Header>
                <ul className={style["footer-left-list"]}>
                  <li className={style["footer-left-list__item"]}>
                    <Link href={"tel:+380999999999"} color={"#fff"}>
                      + 380 999 999 999
                    </Link>
                  </li>
                  <li className={style["footer-left-list__item"]}>
                    <Link href={"tel:+380777777777"} color={"#fff"}>
                      + 380 777 777 777
                    </Link>
                  </li>
                </ul>
                <Header level={3} mb={"20px"}>
                  Email:
                </Header>
                <ul>
                  <li>
                    <Link href={"mailto:muzshop@example.com"} color={"#fff"}>
                      muzshop@example.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={style["footer__right"]}>
                <Header level={3} text={""} mb={"20px"}>
                  Соц. сети:
                </Header>
                <ul className={style["footer__right-social"]}>
                  <li>
                    <Link href={"#"}>
                      <img src={telegram}></img>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src={instagram}></img>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src={facebook}></img>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default Home;
