import { createSlice } from "@reduxjs/toolkit";

const addToCartIS = {
  name: "",
  quantity: 0,
  nameValid: true,
  quantityValid: true,
  subTotal: 0,
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: addToCartIS,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export default addToCartSlice.reducer;
export const { setName, setQuantity } = addToCartSlice.actions;
