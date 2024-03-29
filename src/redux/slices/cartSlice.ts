import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};

interface CartSliceState {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const calculatePrice = (state: CartSliceState) => {
  state.totalPrice = state.items.reduce(
    (sum, obj) => obj.price * obj.count + sum,
    0,
  );
};

const calculateItems = (state: CartSliceState) => {
  state.totalItems = state.items.reduce((sum, obj) => obj.count + sum, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
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
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);

      calculatePrice(state);
      calculateItems(state);
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find(item => item.id === action.payload);

      if (findItem) {
        if (findItem.count <= 1) {
          if (window.confirm('Remove?')) {
            state.items = state.items.filter(item => item.id !== action.payload);
          }
        } else {
          findItem.count--;
        }
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
