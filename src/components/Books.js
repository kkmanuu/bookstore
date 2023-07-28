import React from 'react';
import Book from './Book';
import Form from './Form';

// BookList component for rendering a list of books using the Book component
const BookList = () => (
  <>
    <Book genre="Action" title="The Hunger Games" author="Susanne Collins" />
    <Book genre="Science Fiction" title="Dune" author="Frank Herbert" />
    <Book genre="Economy" title="Capital in the Twenty-First Century" author="Karl Max" />
  </>
);

const Books = () => (
  <div className="booksDiv">
    <div className="eachBookDiv">
      <BookList />
    </div>
    <Form />
  </div>
);

export default Books;
