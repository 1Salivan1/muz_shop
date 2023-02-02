import React from 'react';
import './Offer.css';
import guitar from '../img/guitar.png';

function Offer({img, title, price}) {
    return (
        <div className='offer'>
            <div className="offer__content">
                <img className='offer__content-img' src={img}></img>
                <p className='offer__content-text'>{title}</p>
                <p className='offer__content-price'>{price} грн</p>
                <button className='offer__content-button'>Убрать</button>
            </div>
        </div>
    );
}

export default Offer;