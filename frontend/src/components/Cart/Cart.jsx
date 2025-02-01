import React from "react";
import Offer from "../Offer/Offer";
import "./cart.css";

function Cart({ active, setActive, offer, setOffer, setOfferDoneActive }) {
  return (
    <div
      className={active ? "cart active" : "cart"}
      onClick={() => setActive(false)}
    >
      <div className="cart__content" onClick={(e) => e.stopPropagation()}>
        <h1 className="cart__content-header">Ваша корзина</h1>
        <div className="cart__content-offers">
          {offer.length === 0 ? (
            <p className="cart__content-text">Тут пока пусто</p>
          ) : (
            offer.map((el) => {
              return (
                <Offer
                  key={el.id}
                  id={el.id}
                  img={el.img}
                  title={el.title}
                  price={el.price}
                  offers={offer}
                  setOffers={setOffer}
                />
              );
            })
          )}
        </div>
        <button
          className="cart__content-button"
          onClick={() => {
            setActive(false);
            setOfferDoneActive(true);
          }}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Cart;
