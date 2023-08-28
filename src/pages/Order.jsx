import React from "react";
import guitar from "../img/guitar.png"

function Order() {
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
                            <input type="radio" name="type-radio"/>
                            <p className="order-list__item-text">Классическая</p>
                        </li>
                        <li className="order-list__item">
                            <input type="radio" name="type-radio"/>
                            <p className="order-list__item-text">Акустическая</p>
                        </li>
                        <li className="order-list__item">
                            <input type="radio" name="type-radio"/>
                            <p className="order-list__item-text">Электро</p>
                        </li>
                    </ul>
                </div>
                <div className="order-right">
                    <img className="order-img" src={guitar} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Order;