"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image:newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
        state.totalPrice += existingItem.price;
      }
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        // If the quantity is 1, removing the item entirely from the cart
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
