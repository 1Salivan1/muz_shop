import React from "react";
import "./offer.css";

function Offer({ id, img, title, price, offers, setOffers }) {
  function Remove() {
    let newList = offers.filter((el) => el.id !== id);
    setOffers(newList);
  }

  return (
    <div className="offer-card" id={id}>
      <div className="offer-card__content">
        <img className="offer-card__content-img" src={img} alt={title}></img>
        <p className="offer-card__content-text">{title}</p>
        <p className="offer-card__content-price">{price} грн</p>
        <button className="offer-card__content-button" onClick={Remove}>
          Убрать
        </button>
      </div>
    </div>
  );
}

export default Offer;
