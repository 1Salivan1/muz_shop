import React from 'react';
import data from '../data/data.json';
import './Product.css';

function Product() {
        return (
            <div className='block'>
                {data.map((el) => {
                    return (
                        <div className='product' key={el.id}>
                            <div className='buy__top'>
                                <div className='product__top-image-background'>
                                    <img className='product__top-image' src={el.img}></img>
                                </div>
                                <h3 className='product__top-title'>{el.title}</h3>
                            </div>
                            <div className='product__buy'>
                                <h3 className='product__buy-price'>{el.price} грн</h3>
                                <button className='product__buy-button'>В корзину</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
}

export default Product;