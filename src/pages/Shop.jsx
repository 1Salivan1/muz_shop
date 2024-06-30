import React, { useState } from "react";
import Cart from "../components/Cart/Cart";
import Product from "../components/Product/Product";
import OfferForm from "../components/OfferForm/OfferForm";
import cart from "../img/cart.png";
import data from "../data/data.json";
import "../css/Instruments.css";

function Shop() {
  const [value, setValue] = useState("");
  const [currentData, setCurrentData] = useState(data);
  const [modalActive, modalSetActive] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [offerDoneActive, setOfferDoneActive] = useState(false);

  function dataFilter(event) {
    if (event.target.textContent.toLowerCase() === "все") {
      setCurrentData(data);
    } else if (event.target.textContent.toLowerCase() === "гитары") {
      setCurrentData(data.filter((e) => e.type === "guitar"));
    } else if (event.target.textContent.toLowerCase() === "скрипки") {
      setCurrentData(data.filter((e) => e.type === "violence"));
    } else if (event.target.textContent.toLowerCase() === "саксофоны") {
      setCurrentData(data.filter((e) => e.type === "saxophone"));
    } else if (event.target.textContent.toLowerCase() === "барабаны") {
      setCurrentData(data.filter((e) => e.type === "drums"));
    }
  }

  function dataSort(event) {
    if (event.target.value == "none") {
      setCurrentData(data);
    } else if (event.target.value === "low-to-high") {
      setCurrentData([...currentData].sort((a, b) => a["price"] - b["price"]));
    } else if (event.target.value === "high-to-low") {
      setCurrentData([...currentData].sort((a, b) => b["price"] - a["price"]));
    }
  }

  return (
    <div className="wrapper">
      <div className="shop">
        <div className="container">
          <div className="shop__search">
            <div>
              <form>
                <input
                  className="shop__search-input"
                  placeholder="Поиск"
                  onChange={(e) => setValue(e.target.value)}
                ></input>
                <select
                  className="shop__search-sort"
                  name="shop__search-sort"
                  onChange={dataSort}
                >
                  <option value="none">Без сортирорвки</option>
                  <option value="low-to-high">От дешевых к дорогим</option>
                  <option value="high-to-low">От дорогих к дешевым</option>
                </select>
              </form>
            </div>
            <img
              className="shop__search-cart"
              src={cart}
              onClick={() => modalSetActive(true)}
            ></img>
          </div>
          <div className="shop__main">
            <div className="shop__main-category">
              <ul className="shop__main-category-list">
                <li className="shop__main-category-item" onClick={dataFilter}>
                  Все
                </li>
                <li className="shop__main-category-item" onClick={dataFilter}>
                  Гитары
                </li>
                <li className="shop__main-category-item" onClick={dataFilter}>
                  Скрипки
                </li>
                <li className="shop__main-category-item" onClick={dataFilter}>
                  Саксофоны
                </li>
                <li className="shop__main-category-item" onClick={dataFilter}>
                  Барабаны
                </li>
              </ul>
            </div>
            <div className="shop__main-products">
              {currentData
                .filter((el) => {
                  return value.toLowerCase() === ""
                    ? el
                    : el.title.toLowerCase().includes(value.toLowerCase());
                })
                .map((el, index) => {
                  return (
                    <Product
                      img={el.img}
                      title={el.title}
                      price={el.price}
                      key={el.id}
                      addToCart={() => setCartList([...cartList, el])}
                    />
                  );
                })}
            </div>
          </div>
          <Cart
            active={modalActive}
            setActive={modalSetActive}
            offer={cartList}
            setOffer={setCartList}
            setOfferDoneActive={setOfferDoneActive}
          />
          <OfferForm
            offerDoneActive={offerDoneActive}
            setOfferDoneActive={setOfferDoneActive}
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;
