import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemQuantity: 0,
  cartQuantity: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIdx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIdx >= 0) {
        state.cartItems[itemIdx].itemQuantity += 1;
        state.cartQuantity += 1;
        state.cartTotal += action.payload.price;
      } else {
        const newItem = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(newItem);
        state.cartQuantity += 1;
        state.cartTotal += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartQuantity -= 1;
      state.cartTotal -= action.payload.price;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartQuantity = 0;
      state.cartTotal = 0;
      state.itemQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
