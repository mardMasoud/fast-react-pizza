import { createSlice } from "@reduxjs/toolkit";
// import { action } from "../order/CreateOrder";

const initialState = {
  cart: [
    {
      id: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteAtCart: (state, action) => {
      console.log("id:", action.payload);
      console.log("state:", state.cart);
      state.cart = state.cart.filter(
        (stateItem) => stateItem.id !== action.payload
      );
    },
    increase: (state, action) => {
      state.cart[action.payload].quantity =
        state.cart[action.payload].quantity + 1;
    },
  },
});
export const { addToCart, deleteAtCart, increase } = cartSlice.actions;
export default cartSlice.reducer;
