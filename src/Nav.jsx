import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import Main from './pages/Main';
import logo from './img/logo.png';


function Nav(props) {
    return (
        <div className='nav'>
            <div className='wrapper'>
                <nav className="header__nav">
                    <div className='container'>
                        <div className='header__nav-list'>
                            <a href="#/" className="header__nav-item">Главная</a>
                            <a href="#/instruments" className="header__nav-item">Инструменты</a>
                            <a href="#/contacts" className="header__nav-item">Контакты</a>
                        </div>
                    </div>
                </nav>
            </div>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/instruments' element={<Shop />}/>
                <Route path='/contacts' element={<Contacts />}/>
            </Routes>
        </div>

    );
}

export default Nav