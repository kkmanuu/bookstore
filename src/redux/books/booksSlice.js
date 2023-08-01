import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, actions) => {
      const newBook = {
        id: state.booksList.length += 1,
        title: actions.payload.title,
        author: actions.payload.author,
      };
      state.booksList.push(newBook);
    },
    removeBook: (state, { payload }) => {
      state.booksList.filter((book) => book.id !== payload.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
