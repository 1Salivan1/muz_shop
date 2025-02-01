import React from "react";
import style from "./contacts.module.css";
import telegram from "../../assets/img/telegram.png";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";

function Contacts() {
  return (
    <div className="wrapper">
      <div className={style["contacts"]}>
        <div className="container">
          <h2 mb={"25px"}>Наши контакты</h2>
          <h4 level={2} mb={"25px"}>
            Номера телефонов
          </h4>
          <ul>
            <li className={style["contacts-item"]}>
              <a href={"tel:+380999999999"} color={"#fff"}>
                + 380 999 999 999
              </a>
            </li>
            <li className={style["contacts-item"]}>
              <a href={"tel:+380777777777"} color={"#fff"}>
                + 380 777 777 777
              </a>
            </li>
          </ul>
          <h4 level={2} mb={"25px"}>
            Email:
          </h4>
          <ul>
            <li className={style["contacts-item"]}>
              <a href={"mailto:muzshop@example.com"} color={"#fff"}>
                muzshop@example.com
              </a>
            </li>
          </ul>
          <h4 level={2} mb={"25px"}>
            Соц. сети:
          </h4>
          <div className={style["social-list"]}>
            <a href={"#"}>
              <img src={telegram}></img>
            </a>
            <a href={"#"}>
              <img src={instagram}></img>
            </a>
            <a href={"#"}>
              <img src={facebook}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
