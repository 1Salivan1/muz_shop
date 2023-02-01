import React, { useState } from 'react';
import './Instruments.css';
import Cart from '../components/Cart'
import Product from '../components/Product'
import cart from '../img/cart.png';
import data from "../data/data.json";

function Shop() {
    const [value, setValue] = useState('');
    const [currentData, setCurrentData] = useState(data);
    const [modalActive, modalSetActive] = useState(false);
    const [cartList, setCartList] = useState([]);

    function dataFilter(event) {
        if (event.target.textContent.toLowerCase() === 'все') {
            setCurrentData(data)
        } else if (event.target.textContent.toLowerCase() === 'гитары') {
            setCurrentData(data.filter(e => e.type === 'guitar'));
        } else if (event.target.textContent.toLowerCase() === 'скрипки') {
            setCurrentData(data.filter(e => e.type === 'violence'));
        } else if (event.target.textContent.toLowerCase() === 'саксофоны') {
            setCurrentData(data.filter(e => e.type === 'saxophone'));
        } else if (event.target.textContent.toLowerCase() === 'барабаны') {
            setCurrentData(data.filter(e => e.type === 'drums'));
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
                                <option value="1">Без сортирорвки</option>
                                <option value="2">От дешевых к дорогим</option>
                                <option value="3">От дорогих к дешевым</option>
                            </select>
                        </form>
                        <img className='shop__search-cart' src={cart} onClick={() => modalSetActive(true)}></img>
                    </div>
                    <div className='shop__main'>
                        <div className='shop__main-category'>
                            <ul className='shop__main-category-list'>
                                <li className='shop__main-category-item' onClick={dataFilter}>Все</li>
                                <li className='shop__main-category-item' onClick={dataFilter}>Гитары</li>
                                <li className='shop__main-category-item' onClick={dataFilter}>Скрипки</li>
                                <li className='shop__main-category-item' onClick={dataFilter}>Саксофоны</li>
                                <li className='shop__main-category-item' onClick={dataFilter}>Барабаны</li>
                            </ul>
                        </div>
                        <div className='shop__main-products'>
                            {
                                currentData.filter((el) => {
                                    return value.toLowerCase() === '' ? el : el.title.toLowerCase().includes(value.toLowerCase())
                                }).map((el, index) => {
                                    return (
                                        <Product img={el.img} title={el.title} price={el.price} key={el.id} addToCart={() => setCartList([...cartList, el])}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Cart active={modalActive} setActive={modalSetActive} offer={cartList}/>
                </div>
            </div>
    );
}

export default Shop;