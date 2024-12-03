import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecommendationsContext } from "../../RecommendationsContext";
import "./View.css"; // Assuming you have a separate CSS file for styling

function View() {
  const { id } = useParams(); // Get the product ID from the URL
  const { recommendations } = useContext(RecommendationsContext); // Use context to get recommendations data

  // Find the product with the matching ID
  const product = recommendations.find((item) => item.id ===Number(id));
console.log(product)
  return product ? (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>₹ {product.price}</p>
          <span>{product.title}</span>
          <p>{product.location}</p>
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
