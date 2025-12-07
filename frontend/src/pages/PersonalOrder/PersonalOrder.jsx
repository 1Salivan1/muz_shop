import { useState } from "react";
import classic from "../../assets/img/classic-guitar.png";
import acustic from "../../assets/img/acustick-guitar.png";
import electro from "../../assets/img/electric-guitar.png";
import bass from "../../assets/img/bass.jpg";
import OfferForm from "../../components/OfferForm/OfferForm";
import styles from "./PersonalOrder.module.css";

function PersonalOrder() {
  const [selectedRadio, setSelectedRadio] = useState("classic");
  const [offerDoneActive, setOfferDoneActive] = useState(false);

  const getImageSource = (selectedRadio) => {
    switch (selectedRadio) {
      case "classic":
        return classic;
      case "acustic":
        return acustic;
      case "electro":
        return electro;
      case "bass":
        return bass;
      default:
        return classic;
    }
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <div className={`wrapper ${styles["order-wrapper"]}`}>
      <section className={styles["order"]}>
        <div className="container">
          <h1 className={styles["order__header"]}>
            Настройка персонального заказа
          </h1>
          <div className={styles["order-block"]}>
            <div className={styles["order-left"]}>
              <h4 style={{ marginBottom: "20px" }}>Цвет</h4>
              <input className={styles["color-input"]} type="color" />
              <h4 style={{ marginBottom: "20px" }}>Тип гитары</h4>
              <ul className={styles["order-list"]}>
                {[
                  { type: "classic", label: "Классическая" },
                  { type: "acustic", label: "Акустическая" },
                  { type: "electro", label: "Электро" },
                  { type: "bass", label: "Электро бас" },
                ].map(({ type, label }) => (
                  <li key={type} className={styles["order-list__item"]}>
                    <input
                      type="radio"
                      name="type-radio"
                      value={type}
                      className={styles["radio-input"]}
                      onChange={handleRadioChange}
                      checked={selectedRadio === type}
                    />
                    <p className={styles["order-list__item-text"]}>{label}</p>
                  </li>
                ))}
              </ul>
              <h4 style={{ marginBottom: "20px" }}>Персональные пожелания</h4>
              <p style={{ marginBottom: "20px", maxWidth: "300px" }}>
                Вы можете описать, что хотите видеть, например гравировка на
                грифе, необычная форма и т.д.
              </p>
              <textarea
                className={styles["personal-wishes"]}
                cols="30"
                rows="10"
              />
              <div>
                <button
                  className={styles["order-button"]}
                  onClick={() => setOfferDoneActive(true)}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
            <div className={styles["order-right"]}>
              <img
                className={styles["order-img"]}
                src={getImageSource(selectedRadio)}
                alt="Гитара"
              />
            </div>
          </div>
          <OfferForm
            offerDoneActive={offerDoneActive}
            setOfferDoneActive={setOfferDoneActive}
          />
        </div>
      </section>
    </div>
  );
}

export default PersonalOrder;
