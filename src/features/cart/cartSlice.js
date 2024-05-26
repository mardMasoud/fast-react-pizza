import { createSlice } from "@reduxjs/toolkit";
// import { action } from "../order/CreateOrder";

const initialState = {
    cart: [],
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
            state.cart = state.cart.filter((stateItem) => stateItem.id !== action.payload);
        },
        increase: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decrease: (state, action) => {
          const item = state.cart.find((item) => item.id === action.payload);
          item.quantity--;
          item.totalPrice = item.quantity * item.unitPrice;
        }
      ,
      clearAll:(state)=>{
      state.cart=[]
    }}
});
export const { addToCart, deleteAtCart, increase, decrease,clearAll } = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getSumCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
