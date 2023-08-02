import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: `item${state.length + 1}`, // Generate item_id correctly
        title: action.payload.title,
        author: action.payload.author,
        category: 'Fiction', // Assuming default category as "Fiction"
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const itemIdToRemove = action.payload.id;
      return state.filter((book) => book.item_id !== itemIdToRemove); // Use item_id instead of id
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
