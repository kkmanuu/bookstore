import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [bookData, setBookData] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddBook = () => {
    if (bookData.title && bookData.author) {
      dispatch(addBook(bookData));
      setBookData({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form className="addBookDiv">
      <div className="addBook">
        <h3>ADD NEW BOOK</h3>
        <input
          name="title"
          placeholder="Book Title"
          value={bookData.title}
          onChange={handleChange}
        />
        <input
          name="author"
          placeholder="Author"
          value={bookData.author}
          onChange={handleChange}
        />
        <button type="button" className="addBookButton" onClick={handleAddBook}>
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default Form;
