import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../pages/Shop";
import Contacts from "../../pages/Contacts/Contacts";
import Main from "../../pages/Main/Main";
import Order from "../../pages/Order";

function Nav(props) {
  return (
    <div className="nav">
      <div className="wrapper">
        <nav className="header__nav">
          <div className="container">
            <div className="header__nav-list">
              <a href="#/" className="header__nav-item">
                Главная
              </a>
              <a href="#/instruments" className="header__nav-item">
                Инструменты
              </a>
              <a href="#/order" className="header__nav-item">
                Персональный заказ
              </a>
              <a href="#/contacts" className="header__nav-item">
                Контакты
              </a>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/instruments" element={<Shop />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default Nav;
