import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: null,
  },
  reducers: {
    setCart(state, action) {
      state.cart.push(action.payload);
    },
    setClearCart(state) {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
