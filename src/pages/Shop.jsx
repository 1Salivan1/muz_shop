import React, { useState } from 'react';
import './Instruments.css';
import Product from '../components/Product'
import cart from '../img/cart.png';
import data from "../data/data.json";

function Shop() {
    let currentData = data;
    const [value, setValue] = useState('');

    const dataFilter = (event) => {
        if (event.target.textContent.toLowerCase() === 'все'){
            return (
                data.map((e, index) => {
                    <Product img={e.img} title={e.title} price={e.price} key={e.id}/>
                })
            )
        }
    }

    return (
            <div className='shop'>
                <div className='container'>
                    <div className='shop__search'>
                        <form>
                            <input 
                                className='shop__search-input' 
                                placeholder="Поиск" 
                                onChange={(e) => setValue(e.target.value)}
                            >
                            </input>
                            <select name='shop__search-sort'>
                                <option value="1">По релевантности</option>
                                <option value="2">От дешевых к дорогим</option>
                                <option value="3">От дорогих к дешевым</option>
                            </select>
                        </form>
                        <img src={cart} className='shop__search-cart'></img>
                    </div>
                    <div className='shop__main'>
                        <div className='shop__main-category'>
                            <ul className='shop__main-category-list'>
                                <li className='shop__main-category-item' onClick={dataFilter}>Все</li>
                                <li className='shop__main-category-item' onClick={dataFilter}>Гитары</li>
                                <li className='shop__main-category-item' onClick={dataFilter}>Скприпки</li>
                                <li className='shop__main-category-item' onClick={dataFilter}>Саксофоны</li>
                                <li className='shop__main-category-item' onClick={dataFilter}>Барабаны</li>
                            </ul>
                        </div>
                        <div className='shop__main-products'>
                            {
                                data.filter((el) => {
                                    return value.toLowerCase() === '' ? el : el.title.toLowerCase().includes(value.toLowerCase())
                                }).map((el, index) => {
                                    return (
                                        <Product img={el.img} title={el.title} price={el.price} key={el.id}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Shop;