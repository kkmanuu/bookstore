import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

// Book component for rendering individual books
const Book = ({ genre, title, author }) => (
  <div className="eachBook">
    <div className="bookDetails">
      <p className="genre">{genre}</p>
      <p className="bookTitle">{title}</p>
      <p>{author}</p>
      <div className="commentRemoveEditDiv">
        <p className="commentRemoveEditEffects">Comments</p>
        <p className="commentRemoveEditEffects">Remove</p>
        <p className="commentRemoveEditEffects">Edit</p>
      </div>
    </div>
    <div className="completedRing">
      <div className="ring">.</div>
      <div>
        <h2 className="percent">64%</h2>
        <span>Completed</span>
      </div>
    </div>
    <div className="currentChapter">
      <div className="line">.</div>
      <div>
        <p className="chapterDetails">CURRENT CHAPTER</p>
        <p className="chapterNumber">Chapter 17</p>
        <button type="button" className="progressButton">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

// Add prop-type validation for Book component
Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

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
