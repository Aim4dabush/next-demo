import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    customerOrder: null,
  },
  reducers: {
    setCustomerOrder(state, action) {
      state.customerOrder = action.payload;
    },
    setClearOrder(state) {
      state.customerOrder = null;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
