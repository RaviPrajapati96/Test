import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: []
  },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    addItem: (state, action) => {
      state.productList.push(action.payload);
    },
    deleteItem: (state, action) => {
      const productId = action.payload;
      state.productList = state.productList.filter(
        (product) => product.id !== productId
      );
    },
    updateItem: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.productList.findIndex(
        (product) => product.id === id
      );
      if (productIndex !== -1) {
        state.productList[productIndex] = updatedProduct;
      }
    }
  }
});
export const {
  setProductList,
  addItem,
  deleteItem,
  updateItem
} = productSlice.actions;

export default productSlice.reducer;
