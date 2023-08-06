import React from "react";
import "./Product.css";

function Product({ imageUrl, name, price, addToCart }) {
  const handleAddToCart = () => {
    addToCart({ imageUrl, name, price });
  };

  return (
    <div className="product">
      <img className="imageUrl" src={imageUrl} alt={name} />
      <div className="product-name">{name} </div>
      <div className="price-add">
        <div className="product-price"> ${price.toFixed(2)}</div>
        <button className="add" onClick={handleAddToCart}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Product;
