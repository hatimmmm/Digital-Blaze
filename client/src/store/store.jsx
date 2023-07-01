import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import addToCartReducer from "./features/cart/addToCartSlice";

export default configureStore({
  reducer: { cart: cartReducer, addToCart: addToCartReducer },
});
