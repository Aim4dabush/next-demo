import { configureStore } from "@reduxjs/toolkit";

//slices
import productsReducer from "./slices/ProductsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;