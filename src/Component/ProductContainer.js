import { useEffect } from "react";
import ProductItems from "./ProductItems";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductList,
  addItem,
  updateItem,
  deleteItem
} from "../Utils/ProductSlice";
import ProductForm from "./ProductForm";
import UpdateProductForm from "./UpdateForm";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  console.log(productList);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        dispatch(setProductList(data.products));
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddProduct = (product) => {
    dispatch(addItem(product));
  };

  const handleUpdateProduct = (id, updatedProduct) => {
    dispatch(updateItem({ id, updatedProduct }));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      {productList.map((product, index) => {
        return <ProductItems key={index} productListItem={product} />;
      })}
      <>
        <h2>Add Product</h2>
        <ProductForm onSubmit={handleAddProduct} />
        <h2>Update Product</h2>
        <UpdateProductForm onSubmit={handleUpdateProduct} />
      </>
    </div>
  );
};

export default ProductContainer;
