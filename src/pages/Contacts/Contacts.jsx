import React from "react";
import style from "./contacts.module.css";
import telegram from "../../assets/img/telegram.png";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import Header from "../../ui/Typography/Header/Header";
import Link from "../../ui/Typography/Link/Link";

function Contacts(props) {
  return (
    <div className="wrapper">
      <div className={style["contacts"]}>
        <div className="container">
          <Header mb={"25px"}>Наши контакты</Header>
          <Header level={2} mb={"25px"}>
            Номера телефонов
          </Header>
          <ul>
            <li className={style["contacts-item"]}>
              <Link href={"tel:+380999999999"} color={"#fff"}>
                + 380 999 999 999
              </Link>
            </li>
            <li className={style["contacts-item"]}>
              <Link href={"tel:+380777777777"} color={"#fff"}>
                + 380 777 777 777
              </Link>
            </li>
          </ul>
          <Header level={2} mb={"25px"}>
            Email:
          </Header>
          <ul>
            <li className={style["contacts-item"]}>
              <Link href={"mailto:muzshop@example.com"} color={"#fff"}>
                muzshop@example.com
              </Link>
            </li>
          </ul>
          <Header level={2} mb={"25px"}>
            Соц. сети:
          </Header>
          <div className={style["social-list"]}>
            <Link href={"#"}>
              <img src={telegram}></img>
            </Link>
            <Link href={"#"}>
              <img src={instagram}></img>
            </Link>
            <Link href={"#"}>
              <img src={facebook}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
