import React, { useState } from "react";
import classic from "../img/classic-guitar.png";
import acustic from "../img/acustick-guitar.png";
import electro from "../img/electric-guitar.png";
import bass from "../img/bass.jpg";
import OfferForm from "../components/OfferForm";

function Order() {
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
        return classic; // Значение по умолчанию
    }
  };
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.className);
  };
  return (
    <section className="order">
      <h1 className="order__header">Настройка персонального заказа</h1>
      <div className="order-block">
        <div className="order-left">
          <h2 className="order__header2">Цвет</h2>
          <input type="color" />
          <h2 className="order__header2">Тип гитары</h2>
          <ul className="order-list">
            <li className="order-list__item">
              <input
                type="radio"
                name="type-radio"
                className="classic"
                onChange={handleRadioChange}
                checked={selectedRadio === "classic"}
              />
              <p className="order-list__item-text">Классическая</p>
            </li>
            <li className="order-list__item">
              <input
                type="radio"
                name="type-radio"
                className="acustic"
                onChange={handleRadioChange}
                checked={selectedRadio === "acustic"}
              />
              <p className="order-list__item-text">Акустическая</p>
            </li>
            <li className="order-list__item">
              <input
                type="radio"
                name="type-radio"
                className="electro"
                onChange={handleRadioChange}
                checked={selectedRadio === "electro"}
              />
              <p className="order-list__item-text">Электро</p>
            </li>
            <li className="order-list__item">
              <input
                type="radio"
                name="type-radio"
                className="bass"
                onChange={handleRadioChange}
                checked={selectedRadio === "bass"}
              />
              <p className="order-list__item-text">Электро бас</p>
            </li>
          </ul>
          <h2 className="order__header2">Персональные пожелания</h2>
          <p className="order__description">
            Вы можете описать что хотите видеть, например гравировка на грифе,
            необычная форма и т.д.
          </p>
          <textarea
            className="personal-wishes"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div>
            <button
              className="order-button"
              onClick={() => {
                setOfferDoneActive(true);
              }}
            >
              Оформить заказ
            </button>
          </div>
        </div>
        <div className="order-right">
          <img
            className="order-img"
            src={getImageSource(selectedRadio)}
            alt=""
          />
        </div>
      </div>
      <OfferForm
        offerDoneActive={offerDoneActive}
        setOfferDoneActive={setOfferDoneActive}
      />
    </section>
  );
}

export default Order;
