import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const calculatePrice = state => {
  state.totalPrice = state.items.reduce(
    (sum, obj) => obj.price * obj.count + sum,
    0,
  );
};

const calculateItems = state => {
  state.totalItems = state.items.reduce((sum, obj) => obj.count + sum, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      calculatePrice(state);
      calculateItems(state);
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);

      calculatePrice(state);
      calculateItems(state);
    },
    minusItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload);
      if (findItem.count < 1) {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
      if (findItem) {
        findItem.count--;
      }

      calculatePrice(state);
      calculateItems(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
