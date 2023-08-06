import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Category from "./Category";
import ProductGrid from "./ProductGrid";
import Cart from "./Cart";

const TitelLine = styled.div`
  height: 100px;
  background: linear-gradient(
    180deg,
    rgba(13, 11, 11, 1) 0%,
    rgba(77, 72, 72, 0.9080882352941176) 100%
  );
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px;
  font-size: 2rem;
`;

const Links = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Header = styled.header`
  color: white;
  display: flex;
  align-items: center;
`;

const Measag = styled.div`
  position: relative;
  top: 200px;
  left: 650px;
  display: inline;
  color: white;
`;

const WhiteLink = styled.a`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
`;

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="App">
      <TitelLine>
        <Header> My Shop</Header>
        <Links>
          <WhiteLink href="">Login |</WhiteLink>
          <WhiteLink href="">cart({cartItems.length})</WhiteLink>
        </Links>
      </TitelLine>
      <Category handleCategoryClick={handleCategoryClick} />
      {filteredProducts.length ? (
        <ProductGrid productArray={filteredProducts} addToCart={addToCart} />
      ) : (
        <Measag>There are no items in this category.</Measag>
      )}
    </div>
  );
}

export default App;
