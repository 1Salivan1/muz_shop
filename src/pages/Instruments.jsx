import React from 'react';
import Product from '../components/Product'
import guitar from '../img/guitar.png';

function Instruments(props) {
    return (
        <div className='shop'>
            <div className='shop__search'>
                <input className='shop__search-input'></input>
                <select name='shop__search-sort'>
                    <option value="1">По релевантности</option>
                    <option value="2">От дешевых к дорогим</option>
                    <option value="3">От дорогих к дешевым</option>
                </select>
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
                    <Product img={guitar} title={"Гитара"} price={"3200 грн"}></Product>
                    <Product img={guitar} title={"Гитара"} price={"3200 грн"}></Product>
                    <Product img={guitar} title={"Гитара"} price={"3200 грн"}></Product>
                    <Product img={guitar} title={"Гитара"} price={"3200 грн"}></Product>
                    <Product img={guitar} title={"Гитара"} price={"3200 грн"}></Product>
                    <Product img={guitar} title={"Гитара"} price={"3200 грн"}></Product>
                    <Product img={guitar} title={"Гитара"} price={"3200 грн"}></Product>
                </div>
            </div>
        </div>
    );
}

export default Instruments;