import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Shop from "../../pages/Shop/Shop";
import Contacts from "../../pages/Contacts/Contacts";
import Main from "../../pages/Main/Main";
import PersonalOrder from "../../pages/PersonalOrder/PersonalOrder";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={styles["header-nav"]}>
      <nav className={styles["header-nav"]}>
        <div className={styles["header-navList"]}>
          <Link to="/" className={styles["header-nav-item"]}>
            Главная
          </Link>
          <Link to="/instruments" className={styles["header-nav-item"]}>
            Инструменты
          </Link>
          <Link to="/order" className={styles["header-nav-item"]}>
            Персональный заказ
          </Link>
          <Link to="/contacts" className={styles["header-nav-item"]}>
            Контакты
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/instruments" element={<Shop />} />
        <Route path="/order" element={<PersonalOrder />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default Navigation;
