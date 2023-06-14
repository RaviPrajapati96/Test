import { useEffect, useState } from "react";
export const useData = () => {
  const [productList, setProductList] = useState([]);

  async function FetchProductList() {
    const result = await fetch("https://dummyjson.com/products");
    const data = await result.json();
    setProductList(data.products);
  }

  useEffect(() => {
    FetchProductList();
  }, []);

  return { productList };
};
