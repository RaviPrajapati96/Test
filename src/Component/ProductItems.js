import { deleteItem } from "../Utils/ProductSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ productListItem }) => {
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <div style={{ height: "350px", width: "350px", margin: "10px" }}>
        <h2>{productListItem.title}</h2>
        <p>{productListItem.description}</p>
        <p>Price: {productListItem.price}</p>
        <img
          style={{ height: "300px", width: "300px", objectFit: "contain" }}
          src={productListItem.thumbnail}
          alt={productListItem.title}
        />
        <span>
          <button onClick={() => handleDeleteProduct(productListItem.id)}>
            Delete
          </button>
        </span>
      </div>
    </>
  );
};

export default ProductItem;
