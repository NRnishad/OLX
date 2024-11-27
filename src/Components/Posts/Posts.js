import React, { useContext } from "react";
import { RecommendationsContext } from "../../RecommendationsContext";
import "./Post.css";

function Posts() {
  const { recommendations } = useContext(RecommendationsContext);

  return (
    <div className="recommendations-grid">
      {recommendations.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} className="card-image" />
          <div className="card-details">
            <h3 className="card-price">{item.price}</h3>
            <p className="card-title">{item.title}</p>
            <p className="card-location">{item.location}</p>
            <p className="card-days">{item.daysAgo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
