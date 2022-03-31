import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.changed = true;

    },
    removeItem(state, action) {
      const index = state.items.findIndex((ele) => ele.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
