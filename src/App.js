import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
