import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    showDetailsModal: false,
    showCheckoutModal: false,
  },
  reducers: {
    setShowDetailsModal(state, action) {
      state.showDetailsModal = action.payload;
    },
    setShowCheckoutModal(state, action) {
      state.showCheckoutModal = action.payload;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
