import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductList = createAsyncThunk(
  "product/fetchProductList",
  async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching product list:", error);
      throw error;
    }
  }
);
