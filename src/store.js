import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    user: nameReducer,
    cart: cartReducer,
  },
});
