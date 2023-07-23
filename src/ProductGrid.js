import React from "react";
import "./ProductGrid.css";
import Product from "./Product";

function ProductGrid({ productArray }) {
  return (
    <div className="product-grid">
      <div className="product-place">
        {productArray.map((product, index) => (
          <Product
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
