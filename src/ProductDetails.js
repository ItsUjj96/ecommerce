import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    // Add logic for adding the product to the cart
    console.log("Product added to cart:", product);
  };

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <div className="product-details-container">
        <img className="product-image" src={`/images/${product.image}`} alt={product.name} />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-quantity">Quantity: {product.quantity}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
