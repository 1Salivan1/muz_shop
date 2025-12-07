import telegram from "../../assets/img/telegram.png";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className="container">
        <div className={style["footer-container"]}>
          <div className={style["footer-left"]}>
            <div>
              <h5 style={{ marginBottom: "20px" }}>Контакты:</h5>
              <ul className={style["footer-left-list"]}>
                <li className={style["footer-left-list__item"]}>
                  <a href={"tel:+380999999999"} color={"#fff"}>
                    + 380 999 999 999
                  </a>
                </li>
                <li className={style["footer-left-list__item"]}>
                  <a href={"tel:+380777777777"} color={"#fff"}>
                    + 380 777 777 777
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 style={{ marginBottom: "20px" }}>Email:</h5>
              <ul>
                <li>
                  <a href={"mailto:muzshop@example.com"} color={"#fff"}>
                    muzshop@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style["footer-right"]}>
            <h5 style={{ marginBottom: "20px" }}>Соц. сети:</h5>
            <ul className={style["footer__right-social"]}>
              <li>
                <a href={"#"}>
                  <img src={telegram}></img>
                </a>
              </li>
              <li>
                <a href={"#"}>
                  <img src={instagram}></img>
                </a>
              </li>
              <li>
                <a href={"#"}>
                  <img src={facebook}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
