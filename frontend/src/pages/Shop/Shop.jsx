import React, { useEffect, useState } from "react";
import Cart from "../../components/Cart/Cart";
import Product from "../../components/Product/Product";
import OfferForm from "../../components/OfferForm/OfferForm";
import cart from "../../assets/img/cart.png";
import styles from "./Shop.module.css";

function Shop() {
  const [value, setValue] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [currentData, setCurrentData] = useState(originalData);
  const [modalActive, modalSetActive] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [offerDoneActive, setOfferDoneActive] = useState(false);

  console.log("originalData", originalData);
  console.log("currentData", currentData);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://6478b240362560649a2e4a2c.mockapi.io/MusicalInstruments"
      );

      const data = await res.json();

      setOriginalData(data);
      setCurrentData(data);
    };

    fetchData();
  }, []);

  function dataFilter(event) {
    const category = event.target.textContent.toLowerCase();
    if (category === "все") {
      setCurrentData(originalData);
    } else {
      const typeMap = {
        гитары: "guitar",
        скрипки: "violin",
        саксофоны: "saxophone",
        барабаны: "drums",
      };
      setCurrentData(originalData.filter((e) => e.type === typeMap[category]));
    }
  }

  function dataSort(event) {
    const sortType = event.target.value;
    if (sortType === "none") {
      setCurrentData(originalData);
    } else {
      const sortedData = [...currentData].sort((a, b) =>
        sortType === "low-to-high" ? a.price - b.price : b.price - a.price
      );
      setCurrentData(sortedData);
    }
  }

  return (
    <div className="wrapper">
      <div className={styles["shop"]}>
        <div className="container">
          <div className={styles["shop-search"]}>
            <div>
              <form>
                <input
                  placeholder="Поиск"
                  onChange={(e) => setValue(e.target.value)}
                />
                <select
                  className={styles["shop-search-sort"]}
                  name="shop__search-sort"
                  onChange={dataSort}
                >
                  <option value="none">Без сортировки</option>
                  <option value="low-to-high">От дешевых к дорогим</option>
                  <option value="high-to-low">От дорогих к дешевым</option>
                </select>
              </form>
            </div>
            <div className={styles["cart"]}>
              <span
                className={styles["cart-count"]}
                style={
                  cartList.length > 0
                    ? {
                        backgroundColor: "orange",
                        padding: "2px 7px",
                        borderRadius: "50px",
                      }
                    : {}
                }
              >
                {cartList.length > 0 ? cartList.length : ""}
              </span>
              <img
                className={styles["shop-search-cart"]}
                src={cart}
                onClick={() => modalSetActive(true)}
                alt="cart"
              />
            </div>
          </div>
          <div className={styles["shop-main"]}>
            <div className={styles["shop-main-category"]}>
              <ul className={styles["shop-main-category-list"]}>
                {["Все", "Гитары", "Скрипки", "Саксофоны", "Барабаны"].map(
                  (category) => (
                    <li
                      key={category}
                      className={styles["shop-main-category-item"]}
                      onClick={dataFilter}
                    >
                      {category}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={styles["shop-main-products"]}>
              {currentData
                .filter((el) =>
                  value.toLowerCase() === ""
                    ? el
                    : el.title.toLowerCase().includes(value.toLowerCase())
                )
                .map((el) => (
                  <Product
                    img={el.img}
                    title={el.title}
                    price={el.price}
                    key={el.id}
                    addToCart={() => setCartList([...cartList, el])}
                  />
                ))}
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
