import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from '../../constants/api';

export type PizzaItem = {
  id: number;
  title: string;
  species: { size: number; price: number }[];
  types: number[];
  imageUrl: string;
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzasSliceState {
  pizzas: PizzaItem[];
  status: Status;
}

export const fetchPizzas = createAsyncThunk<PizzaItem[], Record<string, string>>(
  'pizzas/fetchPizzas',
  async ({ sortBy, order, category, search }) => {
    const { data } = await axios.get<PizzaItem[]>(
      `${API}/pizzas?${`sortBy=${sortBy}&order=${order}`}${category}${search}`,
    );
    return data;
  },
);

const initialState: PizzasSliceState = {
  pizzas: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItem[]>) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, state => {
      state.pizzas = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, state => {
      state.pizzas = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
