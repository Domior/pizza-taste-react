import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortItem = {
  name: string;
  sortProp: 'rating' | 'price' | 'title';
  order: 'desc' | 'asc';
};

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: SortItem;
}

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'убыванию популярности',
    sortProp: 'rating',
    order: 'desc',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortItem>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSearchValue, setCategoryId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
