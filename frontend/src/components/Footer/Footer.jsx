import React from "react";
import telegram from "../../assets/img/telegram.png";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import Link from "../../ui/Typography/Link/Link";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className="container">
        <div className={style["footer-container"]}>
          <div className={style["footer-left"]}>
            <h5 style={{ marginBottom: "20px" }}>Контакты:</h5>
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
            <h5 style={{ marginBottom: "20px" }}>Email:</h5>
            <ul>
              <li>
                <Link href={"mailto:muzshop@example.com"} color={"#fff"}>
                  muzshop@example.com
                </Link>
              </li>
            </ul>
          </div>
          <div className={style["footer-right"]}>
            <h5 style={{ marginBottom: "20px" }}>Соц. сети:</h5>
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
  );
};

export default Footer;
