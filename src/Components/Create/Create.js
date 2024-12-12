import React, { useContext, useState } from "react";
import { RecommendationsContext } from "../../RecommendationsContext";
import "./Create.css";

function Create() {
  const { recommendations, setRecommendations } = useContext(RecommendationsContext);
  const [newItem, setNewItem] = useState({
    id: "",
    price: "",
    title: "",
    location: "",
    date: "",
    image: "",
    sellerName: "",
    sellerContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.id && newItem.price && newItem.title) {
      setRecommendations([...recommendations, { ...newItem, id: Number(newItem.id) }]);
      alert("Item added successfully!");
      setNewItem({
        id: "",
        price: "",
        title: "",
        location: "",
        date: "",
        image: "",
        sellerName: "",
        sellerContact: "",
      });
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <div className="createPage">
      <h1>Add a New Item</h1>
      <form onSubmit={handleSubmit} className="createForm">
        <div className="formGroup">
          <label>ID (must be unique):</label>
          <input type="number" name="id" value={newItem.id} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label>Price:</label>
          <input type="text" name="price" value={newItem.price} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label>Title:</label>
          <input type="text" name="title" value={newItem.title} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label>Location:</label>
          <input type="text" name="location" value={newItem.location} onChange={handleChange} />
        </div>
        <div className="formGroup">
          <label>Date:</label>
          <input type="text" name="date" value={newItem.date} onChange={handleChange} />
        </div>
        <div className="formGroup">
          <label>Image URL:</label>
          <input type="text" name="image" value={newItem.image} onChange={handleChange} />
        </div>
        <div className="formGroup">
          <label>Seller Name:</label>
          <input type="text" name="sellerName" value={newItem.sellerName} onChange={handleChange} />
        </div>
        <div className="formGroup">
          <label>Seller Contact:</label>
          <input type="text" name="sellerContact" value={newItem.sellerContact} onChange={handleChange} />
        </div>
        <button type="submit" className="submitButton">Add Item</button>
      </form>
    </div>
  );
}

export default Create;
