import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    product: productSlice
  },
  middleware: [thunk]
});

export default store;
