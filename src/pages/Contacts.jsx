import React from "react";
import "../css/Contacts.css";
import telegram from "../img/telegram.png";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";

function Contacts(props) {
  return (
    <div className="wrapper">
      <div className="contacts">
        <div className="container">
          <h1 className="contacts__header">Наши контакты</h1>
          <h2 className="contacts__title">Номера телефонов</h2>
          <ul className="contacts__list">
            <li className="contacts__item">
              <a href="tel:+380999999999">+ 380 999 999 999</a>
            </li>
            <li className="contacts__item">
              <a href="tel:+380777777777">+ 380 777 777 777</a>
            </li>
          </ul>
          <h2 className="contacts__title">Email:</h2>
          <p className="contacts__item">
            <a href="mailto:muzshop@example.com">muzshop@example.com</a>
          </p>
          <h2 className="contacts__title">Соц. сети:</h2>
          <div className="contacts__social">
            <a href="#" className="contacts__social-item">
              <img src={telegram}></img>
            </a>
            <a href="#" className="contacts__social-item">
              <img src={instagram}></img>
            </a>
            <a href="#" className="contacts__social-item">
              <img src={facebook}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
