import React from "react";
import { useParams } from "react-router-dom";

function View() {
  const { id } = useParams();
  const recommendations =
    JSON.parse(localStorage.getItem("recommendations")) || [];
  const product = recommendations.find((item) => item.id === id);

  return product ? (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>₹ {product.price}</p>
          <span>{product.title}</span>
          <p>{product.category}</p>
          <span>{product.date}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{product.sellerName}</p>
          <p>{product.sellerContact}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Product not found</p>
  );
}

export default View;
