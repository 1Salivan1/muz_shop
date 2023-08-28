import React, { useState } from 'react';
import '../css/OfferForm.css';

function OfferForm({offerDoneActive, setOfferDoneActive}) {
    return (
        <div className={offerDoneActive ? 'offer-form active' : 'offer-form'} onClick={() => setOfferDoneActive(false)}>
            <div className="offer-form__container" onClick={e => e.stopPropagation()}>
                <h1 className='offer-form__header'>Оформить заказ</h1>
                <form className='offer-form__form' action="">
                    <p className='offer-form__text'>Имя</p>
                    <input type="text" className='offer-form__input'/>
                    <p className='offer-form__text'>Фамилия</p>
                    <input type="text" className='offer-form__input'/>
                    <p className='offer-form__text'>Номер телефона</p>
                    <input type="text" className='offer-form__input'/>
                    <p className='offer-form__text'>Адрес доставки</p>
                    <input type="text" className='offer-form__input'/>
                    <button className='offer-form__button' onClick={() => {
                        setOfferDoneActive(false)
                    }}>Оформить заказ</button>
                </form>
            </div>
        </div>
    );
}

export default OfferForm;