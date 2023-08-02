// ../redux/categories/categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  underconstruction: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.underconstruction = 'Under Construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
