import { configureStore } from "@reduxjs/toolkit";

//slices
import cartReducer from "./slices/CartSlice";
import notificationReducer from "./slices/NotificationSlice";
import orderReducer from "./slices/OrderSlice";
import productsReducer from "./slices/ProductsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
    order: orderReducer,
    products: productsReducer,
  },
});

export default store;
