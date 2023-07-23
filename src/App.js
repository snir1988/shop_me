import React from "react";
import "./App.css";
import Category from "./Category";
import ProductGrid from "./ProductGrid";

function App() {
  const products = [
    { imageUrl: "product1.jpg", name: "Product 1", price: 10.99 },
    { imageUrl: "product2.jpg", name: "Product 2", price: 19.99 },
    { imageUrl: "product3.jpg", name: "Product 3", price: 24.99 },
    { imageUrl: "product4.jpg", name: "Product 4", price: 28.99 },
    { imageUrl: "product1.jpg", name: "Product 1", price: 10.99 },
    { imageUrl: "product2.jpg", name: "Product 2", price: 19.99 },
    { imageUrl: "product3.jpg", name: "Product 3", price: 24.99 },
    { imageUrl: "product4.jpg", name: "Product 4", price: 28.99 },
  ];
  return (
    <div className="App">
      <div className="titel-line">
        <header className="header"> My Shop</header>
        <div className="links">
          <a href="">Login |</a>
          <a href="">cart(12)</a>
        </div>
      </div>
      <Category />
      <ProductGrid productArray={products} />{" "}
    </div>
  );
}

export default App;
