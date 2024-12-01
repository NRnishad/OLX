import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  const handleCreate = (e) => {
    e.preventDefault();
    const newCard = {
      id: Date.now().toString(),
      name: e.target.Name.value,
      category: e.target.category.value,
      price: e.target.Price.value,
      image: "default-image-url", // Add file handling for dynamic images
    };
    const recommendations =
      JSON.parse(localStorage.getItem("recommendations")) || [];
    recommendations.push(newCard);
    localStorage.setItem("recommendations", JSON.stringify(recommendations));
    alert("Card created!");
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={handleCreate}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src=""></img>
          <form>
            <br />
            <input type="file" />
            <br />
            <button className="uploadBtn" type="submit">
              upload and Submit
            </button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
