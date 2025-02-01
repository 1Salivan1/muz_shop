import React from "react";
import styles from "./Product.module.css";

function Product({ img, title, price, id, type, addToCart }) {
  return (
    <div className={styles["product"]} key={id} type={type}>
      <div className={styles["product-top"]}>
        <div className={styles["product__top-image-background"]}>
          <img className={styles["product__top-image"]} src={img} alt={title} />
        </div>
        <h5>{title}</h5>
      </div>
      <div className={styles["product__buy"]}>
        <h6 style={{ marginBottom: "5px" }}>{price} грн</h6>
        <button className="green-button" onClick={addToCart}>
          В корзину
        </button>
      </div>
    </div>
  );
}

export default Product;
