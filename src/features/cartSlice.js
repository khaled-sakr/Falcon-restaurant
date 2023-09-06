import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push({ ...action.payload, amount: 0 });
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.idMeal !== action.payload);
    },

    increaseAmount(state, action) {
      const targetItem = state.cart.find(
        (item) => item.idMeal === action.payload
      );
      targetItem.amount++;
      if (targetItem.amount === 0)
        cartSlice.caseReducers.addItem(state, action);
    },
    decreaseAmount(state, action) {
      const targetItem = state.cart.find(
        (item) => item.idMeal === action.payload
      );
      targetItem.amount--;
      if (targetItem.amount === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearItemsCart(state) {
      state.cart = [];
    },
  },
});

// export const getCart = (state) => state.cart.cart;

export const {
  addItem,
  deleteItem,
  decreaseAmount,
  increaseAmount,
  clearItemsCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => cur.price * cur.amount + acc, 0);
export const getTotalTime = (state) =>
  state.cart.cart.reduce((acc, cur) => cur.time + acc, 0);
