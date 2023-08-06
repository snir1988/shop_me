import React, { useState } from "react";
import styled from "styled-components";

import "./Category.css";

const CategoryLink = styled.a`
  display: flex;
  justify-content: center;
  font-size: 30px;
  gap: 15px;
  margin-top: 35px;
  color: black;
`;

function Category({ handleCategoryClick }) {
  const categories = [
    { name: "electronics", id: "electronics-link" },
    { name: "jewelery", id: "jewelery-link" },
    { name: "men's clothing", id: "mens-clothing-link" },
    { name: "women's clothing", id: "womens-clothing-link" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (category) => {
    setSelectedCategory(category);
    handleCategoryClick(category);
  };

  return (
    <div className="category-links">
      {categories.map((category, index) => (
        <CategoryLink
          key={category.name}
          href="#"
          onClick={() => handleClick(category.name)}
          id={category.id}
        >
          {category.name} |
        </CategoryLink>
      ))}
    </div>
  );
}

export default Category;
