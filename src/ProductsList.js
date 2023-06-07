import React from "react";
import { Link } from "react-router-dom";
import productsData from "./products.json";
import "./ProductList.css"; // Import the CSS file for styling

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-items">
        {productsData.map((product) => (
          <div key={product.id} className="product-item">
            <img className="product-image" src={`/images/${product.image}`} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: ₹{product.price}</p>
            <Link to={`/products/${product.id}`} className="product-details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
