import React from "react";
import "./Products.css";
import oudRoyale from "../assets/oud-royale.jpg";
import amberMusk from "../assets/amber-musk.jpg";
import rosewoodEssence from "../assets/rosewood.jpg";

const products = [
  {
    id: 1,
    name: "Oud Royale",
    price: "₹1,200",
    image: oudRoyale,
  },
  {
    id: 2,
    name: "Amber Musk",
    price: "₹999",
    image: amberMusk,
  },
  {
    id: 3,
    name: "Rosewood Essence",
    price: "₹850",
    image: rosewoodEssence,
  },
  {
    id: 4,
    name: "Sandalwood Bliss",
    price: "₹1,100",
    image: oudRoyale,
  },
  {
    id: 5,
    name: "Musk Supreme",
    price: "₹950",
    image: amberMusk,
  },
  {
    id: 6,
    name: "Jasmine Oud",
    price: "₹890",
    image: rosewoodEssence,
  },
];

const Products = () => {
  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="quick-view">👁 Quick View</div>
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
