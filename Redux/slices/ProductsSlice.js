import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: null,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
