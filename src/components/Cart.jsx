import React, { useState } from 'react';
import Offer from './Offer';
import './Cart.css';
import { render } from '@testing-library/react';

function Cart ({active, setActive, offer}) {
    return (
        <div className={active ? 'cart active' : 'cart'} onClick={() => setActive(false)}>
            <div className="cart__content" onClick={e => e.stopPropagation()}>
                <h1 className='cart__content-header'>Ваша корзина</h1>
                <div>
                    {offer.length === 0 ? <p className='cart__content-text'>Тут пока пусто</p> : <Offer/>}
                </div>
                <button className='cart__content-button'>Оформить заказ</button>
            </div>
        </div>
    );
}

export default Cart;