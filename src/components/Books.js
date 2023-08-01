import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="booksDiv">
      <div className="eachBookDiv">
        {books.map((book) => (
          <Book key={book.item_id} itemId={book.item_id} title={book.title} author={book.author} />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
