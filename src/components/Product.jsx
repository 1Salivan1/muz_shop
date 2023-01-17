import React from 'react';
import data from '../data/data.json';
import './Product.css';

function Product({img, title, price, id}) {
    return (
                <div className='product' key={id}>
                    <div className='buy__top'>
                        <div className='product__top-image-background'>
                            <img className='product__top-image' src={img}></img>
                        </div>
                        <h3 className='product__top-title'>{title}</h3>
                    </div>
                    <div className='product__buy'>
                        <h3 className='product__buy-price'>{price} грн</h3>
                        <button className='product__buy-button'>В корзину</button>
                    </div>
                </div>
            )
}

export default Product;