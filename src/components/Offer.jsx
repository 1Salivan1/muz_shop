import React from 'react';
import './Offer.css';
import guitar from '../img/guitar.png';

function Offer() {
    return (
        <div className='offer'>
            <div className="offer__content">
                <img className='offer__content-img' src={guitar}></img>
                <p className='offer__content-text'>Гитара</p>
                <p className='offer__content-price'>6000 грн</p>
                <button className='offer__content-button'>Убрать</button>
            </div>
        </div>
    );
}

export default Offer;