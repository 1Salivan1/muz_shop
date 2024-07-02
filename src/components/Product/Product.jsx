import React from "react";
import "./product.css";
import Button from "../../ui/Button/Button";

function Product({ img, title, price, id, type, addToCart }) {
  return (
    <div className="product" key={id} type={type}>
      <div className="buy__top">
        <div className="product__top-image-background">
          <img className="product__top-image" src={`../../${img}`}></img>
        </div>
        <h3 className="product__top-title">{title}</h3>
      </div>
      <div className="product__buy">
        <h3 className="product__buy-price">{price} грн</h3>
        <Button onClick={addToCart} color={"green"} text={"В корзину"} />
      </div>
    </div>
  );
}

export default Product;
