import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from '../../constants/api';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async ({ sortBy, order, category, search }) => {
    const { data } = await axios.get(
      `${API}/pizzas?${`sortBy=${sortBy}&order=${order}`}${category}${search}`,
    );
    return data;
  },
);

const initialState = {
  pizzas: [],
  status: 'loading',
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: state => {
      state.pizzas = [];
      state.status = 'loading';
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizzas = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: state => {
      state.pizzas = [];
      state.status = 'error';
    },
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
