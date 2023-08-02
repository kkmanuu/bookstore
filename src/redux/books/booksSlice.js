import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1BzfvD0wemkgNcxHqiGj';

const initialState = {
  booksList: [],
  error: null,
};

export const getBooksFromAPI = createAsyncThunk(
  'getBooks',
  async () => {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  },
);

export const postToAPI = createAsyncThunk(
  'postBooks',
  async (booksObject) => {
    const response = await axios.post(`${BASE_URL}/books`, booksObject, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    return response.data;
  },
);

export const removeBookFromAPI = createAsyncThunk(
  'removebook',
  async (bookId) => {
    await axios.delete(`${BASE_URL}/books/${bookId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return bookId;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksFromAPI.fulfilled, (state, action) => {
        state.booksList = Object.keys(action.payload).map((bookId) => ({
          id: bookId,
          ...action.payload[bookId][0],
        }));
        state.error = null;
      })
      .addCase(getBooksFromAPI.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(postToAPI.fulfilled, (state, action) => {
        const { item_id: id, ...oldBooks } = action.payload;
        const addedBook = {
          id,
          ...oldBooks,
        };
        state.booksList.push(addedBook);
        state.error = null;
      })
      .addCase(postToAPI.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeBookFromAPI.fulfilled, (state, action) => {
        state.booksList = state.booksList.filter((book) => book.id !== action.payload);
        state.error = null;
      })
      .addCase(removeBookFromAPI.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
