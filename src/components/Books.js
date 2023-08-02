import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books.booksList); // Access the booksList state

  return (
    <div className="booksDiv">
      <div className="eachBookDiv">
        {books.map((book) => (
          <Book key={book.id} book={book} /> // Add the unique key prop using the book's id
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
