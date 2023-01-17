import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import Main from './Main';
import './Nav.css';
import logo from './img/logo.png';


function Nav(props) {
    return (
        <div className='nav'>
            <nav className="header__nav">
                <img className='nav__logo' src={logo} alt=""></img>
                <div className='header__nav-list'>
                    <a href="/" className="header__nav-item">Главня</a>
                    <a href="/instruments" className="header__nav-item">Инструменты</a>
                    <a href="/contacts" className="header__nav-item">Контакты</a>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/instruments' element={<Shop />}/>
                <Route path='/contacts' element={<Contacts />}/>
            </Routes>
        </div>

    );
}

export default Nav