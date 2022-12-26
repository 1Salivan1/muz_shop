import React from 'react';
import data from '../data/data.json';
import './Product.css';

function Product() {
        return (
            <div className='block'>
                {data.map((el) => {
                    return (
                        <div className='product' key={el.id}>
                            <img className='product__image' src={el.img}></img>
                            <h3 className='product__title'>{el.title}</h3>
                            <h3 className='product__price'>{el.price}</h3>
                            <button className='product__button'>В корзину</button>
                        </div>
                    )
                })}
            </div>
        )
}

export default Product;