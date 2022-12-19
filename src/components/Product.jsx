import React from 'react';
import './Product.css';

function Product(props) {
    return (
        <div className='product'>
            <img className='product__image' src={props.img}></img>
            <h3 className='product__title'>{props.title}</h3>
            <h3 className='product__price'>{props.price}</h3>
            <button className='product__button'>В корзину</button>
        </div>
    );
}

export default Product;