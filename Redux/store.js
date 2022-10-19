import { configureStore } from "@reduxjs/toolkit";

//slices
import cartReducer from "./slices/CartSlice";
import productsReducer from "./slices/ProductsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
