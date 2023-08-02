import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ itemId, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook({ id: itemId })); // Use itemId instead of id
  };

  return (
    <div className="eachBook">
      <div className="bookDetails">
        <p className="bookTitle">{title}</p>
        <p>{author}</p>
        <div className="commentRemoveEditDiv">
          <p className="commentRemoveEditEffects">Comments</p>
          <button
            type="button"
            className="commentRemoveEditEffects removeButton"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
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
          <button type="button" className="progressButton">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
