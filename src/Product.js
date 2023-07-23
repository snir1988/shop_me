import React from "react";
import "./Product.css";

function Product({ imageUrl, name, price }) {
  return (
    <div className="product">
      <img className="imageUrl" src={imageUrl} />
      <div className="product-name">{name} </div>
      <div className="price-add">
        <div className="product-price">{price} </div>
        <button className="add">Add</button>
      </div>
    </div>
  );
}

export default Product;
