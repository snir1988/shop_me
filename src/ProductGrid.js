import React from "react";
import "./ProductGrid.css";
import Product from "./Product";

function ProductGrid({ productArray, addToCart }) {
  return (
    <div className="product-grid">
      <div className="product-place">
        {productArray.map((product, index) => (
          <Product
            key={index}
            imageUrl={product.image}
            name={product.title}
            price={product.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
