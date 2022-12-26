import React from 'react';
import './Instruments.css';
import Product from '../components/Product'
import guitar from '../img/guitar.png';
import violence from '../img/violence.png';
import drums from '../img/drums.png';
import saxophone from '../img/saxophone.png';
import cart from '../img/cart.png';
import instruments from "../data/data.json";

function Shop(props) {
    return (
            <div className='shop'>
                <div className='container'>
                    <div className='shop__search'>
                        <form>
                            <input className='shop__search-input' placeholder="Поиск"></input>
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
                                <li className='shop__main-category-item'>Гитары</li>
                                <li className='shop__main-category-item'>Скприпки</li>
                                <li className='shop__main-category-item'>Саксофоны</li>
                                <li className='shop__main-category-item'>Барабаны</li>
                            </ul>
                        </div>
                        <div className='shop__main-products'>
                            <Product/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Shop;