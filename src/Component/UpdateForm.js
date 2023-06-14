const UpdateProductForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    const updatedProduct = {
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value
    };
    onSubmit(id, updatedProduct);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="Product ID" required />
      <input type="text" name="name" placeholder="Name" required />
      <input type="number" name="price" placeholder="Price" required />
      <textarea name="description" placeholder="Description" required />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
