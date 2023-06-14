import React, { useState } from "react";
import { addItem } from "../Utils/ProductSlice";

const ProductForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    // setTitle("");
    // setDescription("");
    // setPrice("");
    const name = event.target[0].value;
    const price = event.target[1].value;
    const description = event.target[2].value;
    const product = {
      id: Date.now(), // Generate a unique ID (this is just an example)
      name,
      price,
      description
    };
    console.log(product);
    onSubmit(product);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
